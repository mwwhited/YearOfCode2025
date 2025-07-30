import { z } from 'zod';
import { logger } from './logger';

/**
 * Validation utility for form data and API responses
 */

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: ValidationError[];
}

export interface ValidationError {
  path: string;
  message: string;
  code?: string;
}

/**
 * Validates data against a Zod schema
 */
export function validateData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  try {
    const validatedData = schema.parse(data);
    return {
      success: true,
      data: validatedData
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: ValidationError[] = error.errors.map(err => ({
        path: err.path.join('.'),
        message: err.message,
        code: err.code
      }));
      
      logger.warn('Validation failed:', { errors });
      
      return {
        success: false,
        errors
      };
    }
    
    logger.error('Unexpected validation error:', error);
    
    return {
      success: false,
      errors: [{
        path: '',
        message: 'An unexpected validation error occurred'
      }]
    };
  }
}

/**
 * Safely validates data without throwing
 */
export function safeParse<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): T | null {
  const result = schema.safeParse(data);
  return result.success ? result.data : null;
}

/**
 * Creates a validator function for a specific schema
 */
export function createValidator<T>(schema: z.ZodSchema<T>) {
  return (data: unknown): ValidationResult<T> => {
    return validateData(schema, data);
  };
}

/**
 * Validates form data with custom error messages
 */
export function validateForm<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  customMessages?: Record<string, string>
): ValidationResult<T> {
  const result = validateData(schema, data);
  
  if (!result.success && result.errors && customMessages) {
    result.errors = result.errors.map(error => {
      const customMessage = customMessages[error.path];
      return customMessage ? { ...error, message: customMessage } : error;
    });
  }
  
  return result;
}

/**
 * Validates API response data
 */
export function validateApiResponse<T>(
  schema: z.ZodSchema<T>,
  response: unknown,
  context?: string
): T {
  try {
    return schema.parse(response);
  } catch (error) {
    logger.error(`API response validation failed${context ? ` for ${context}` : ''}:`, {
      error,
      response
    });
    throw new Error(
      `Invalid API response${context ? ` for ${context}` : ''}`
    );
  }
}

/**
 * Common validation schemas
 */
export const commonSchemas = {
  email: z.string().email('Invalid email address'),
  
  phoneNumber: z.string().regex(
    /^\+?[1-9]\d{1,14}$/,
    'Invalid phone number'
  ),
  
  postalCode: z.string().regex(
    /^\d{5}(-\d{4})?$/,
    'Invalid postal code'
  ),
  
  url: z.string().url('Invalid URL'),
  
  nonEmptyString: z.string().min(1, 'This field is required'),
  
  positiveNumber: z.number().positive('Must be a positive number'),
  
  percentage: z.number().min(0).max(100, 'Must be between 0 and 100'),
  
  dateString: z.string().regex(
    /^\d{4}-\d{2}-\d{2}$/,
    'Invalid date format (YYYY-MM-DD)'
  ),
  
  futureDate: z.string().refine(
    (val) => new Date(val) > new Date(),
    'Date must be in the future'
  ),
  
  pastDate: z.string().refine(
    (val) => new Date(val) < new Date(),
    'Date must be in the past'
  )
};

/**
 * Field-level validators for common scenarios
 */
export const fieldValidators = {
  required: (fieldName: string) => 
    z.string().min(1, `${fieldName} is required`),
  
  minLength: (fieldName: string, min: number) =>
    z.string().min(min, `${fieldName} must be at least ${min} characters`),
  
  maxLength: (fieldName: string, max: number) =>
    z.string().max(max, `${fieldName} must be at most ${max} characters`),
  
  range: (fieldName: string, min: number, max: number) =>
    z.number()
      .min(min, `${fieldName} must be at least ${min}`)
      .max(max, `${fieldName} must be at most ${max}`),
  
  pattern: (fieldName: string, pattern: RegExp, message?: string) =>
    z.string().regex(pattern, message || `${fieldName} format is invalid`)
};

/**
 * Creates error message formatter for form fields
 */
export function createErrorFormatter(
  errors: ValidationError[]
): Record<string, string> {
  const formattedErrors: Record<string, string> = {};
  
  errors.forEach(error => {
    if (!formattedErrors[error.path]) {
      formattedErrors[error.path] = error.message;
    }
  });
  
  return formattedErrors;
}

/**
 * Validates partial data (useful for form fields that update individually)
 */
export function validatePartial<T>(
  schema: z.ZodSchema<T>,
  partialData: Partial<T>,
  requiredFields?: (keyof T)[]
): ValidationResult<Partial<T>> {
  const partialSchema = (schema as any).partial();
  
  // If there are required fields, check them
  if (requiredFields && requiredFields.length > 0) {
    const missingFields = requiredFields.filter(
      field => !(field in partialData)
    );
    
    if (missingFields.length > 0) {
      return {
        success: false,
        errors: missingFields.map(field => ({
          path: String(field),
          message: `${String(field)} is required`
        }))
      };
    }
  }
  
  return validateData(partialSchema, partialData);
}