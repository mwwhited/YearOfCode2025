import { useState, useCallback } from 'react';
import { z } from 'zod';
import { 
  validateData, 
  validateForm, 
  validatePartial,
  createErrorFormatter
} from '@/utils/validation';
import type {
  ValidationResult,
  ValidationError
} from '@/utils/validation';

interface UseValidationOptions {
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  customMessages?: Record<string, string>;
}

interface UseValidationReturn<T> {
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isValid: boolean;
  validate: (data: unknown) => ValidationResult<T>;
  validateField: (fieldName: keyof T, value: unknown) => string | null;
  setFieldTouched: (fieldName: keyof T, touched: boolean) => void;
  setAllTouched: () => void;
  clearErrors: () => void;
  clearFieldError: (fieldName: keyof T) => void;
  getFieldError: (fieldName: keyof T) => string | undefined;
  hasFieldError: (fieldName: keyof T) => boolean;
}

/**
 * Hook for form validation using Zod schemas
 */
export function useValidation<T>(
  schema: z.ZodSchema<T>,
  options: UseValidationOptions = {}
): UseValidationReturn<T> {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  const { customMessages } = options;
  
  // Validate all data
  const validate = useCallback((data: unknown): ValidationResult<T> => {
    const result = validateForm(schema, data, customMessages);
    
    if (!result.success && result.errors) {
      setErrors(createErrorFormatter(result.errors));
    } else {
      setErrors({});
    }
    
    return result;
  }, [schema, customMessages]);
  
  // Validate single field
  const validateField = useCallback((
    fieldName: keyof T,
    value: unknown
  ): string | null => {
    try {
      // Try to get the field schema
      const fieldSchema = (schema as any).shape?.[fieldName as string];
      
      if (fieldSchema) {
        fieldSchema.parse(value);
        return null;
      }
      
      // If no field schema, validate partial object
      const partialData = { [fieldName]: value } as Partial<T>;
      const result = validatePartial(schema, partialData);
      
      if (!result.success && result.errors) {
        const fieldError = result.errors.find(
          err => err.path === String(fieldName)
        );
        return fieldError?.message || null;
      }
      
      return null;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors[0]?.message || 'Validation error';
      }
      return 'Validation error';
    }
  }, [schema]);
  
  // Set field touched state
  const setFieldTouched = useCallback((
    fieldName: keyof T,
    touchedState: boolean
  ) => {
    setTouched(prev => ({
      ...prev,
      [fieldName as string]: touchedState
    }));
  }, []);
  
  // Set all fields as touched
  const setAllTouched = useCallback(() => {
    if ((schema as any).shape) {
      const allTouched = Object.keys((schema as any).shape).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      );
      setTouched(allTouched);
    }
  }, [schema]);
  
  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);
  
  // Clear specific field error
  const clearFieldError = useCallback((fieldName: keyof T) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName as string];
      return newErrors;
    });
  }, []);
  
  // Get field error
  const getFieldError = useCallback((fieldName: keyof T): string | undefined => {
    const key = fieldName as string;
    return touched[key] ? errors[key] : undefined;
  }, [errors, touched]);
  
  // Check if field has error
  const hasFieldError = useCallback((fieldName: keyof T): boolean => {
    const key = fieldName as string;
    return touched[key] && !!errors[key];
  }, [errors, touched]);
  
  // Calculate overall validity
  const isValid = Object.keys(errors).length === 0;
  
  return {
    errors,
    touched,
    isValid,
    validate,
    validateField,
    setFieldTouched,
    setAllTouched,
    clearErrors,
    clearFieldError,
    getFieldError,
    hasFieldError
  };
}

/**
 * Hook for validating API responses
 */
export function useApiValidation<T>(schema: z.ZodSchema<T>) {
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  
  const validateResponse = useCallback((response: unknown): T | null => {
    const result = validateData(schema, response);
    
    if (result.success && result.data) {
      setValidationErrors([]);
      return result.data;
    }
    
    setValidationErrors(result.errors || []);
    return null;
  }, [schema]);
  
  const clearValidationErrors = useCallback(() => {
    setValidationErrors([]);
  }, []);
  
  return {
    validateResponse,
    validationErrors,
    clearValidationErrors,
    hasErrors: validationErrors.length > 0
  };
}