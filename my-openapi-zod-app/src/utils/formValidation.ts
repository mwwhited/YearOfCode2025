import { z } from 'zod';
import type { 
  ISaveProductModel,
  ISaveCategoryModel,
  ISaveUserModel,
  ISaveAllergenModel,
  ISaveIngredientModel,
  ISaveManufacturerModel,
  // ISaveDistributorModel,
  // ISaveSchoolDistrictModel
} from '@/api/GreenOnion/Models';

/**
 * Enhanced validation schemas for form data
 */

// Product validation schema with custom rules
export const productValidationSchema = z.object({
  productId: z.number().optional(),
  productName: z.string()
    .min(3, 'Product name must be at least 3 characters')
    .max(100, 'Product name must be less than 100 characters'),
  manufacturerId: z.number()
    .positive('Please select a manufacturer'),
  categoryId: z.number()
    .positive('Please select a category'),
  description: z.string()
    .max(500, 'Description must be less than 500 characters')
    .optional(),
  unitPrice: z.number()
    .positive('Unit price must be positive')
    .multipleOf(0.01, 'Price must have at most 2 decimal places')
    .optional(),
  unitsInStock: z.number()
    .int('Units must be a whole number')
    .min(0, 'Units cannot be negative')
    .optional(),
  isActive: z.boolean().optional(),
  allergens: z.boolean().optional()
}).refine(
  (data) => {
    // Custom validation: if product has allergens, description should mention it
    if (data.allergens && data.description) {
      return data.description.toLowerCase().includes('allergen') ||
             data.description.toLowerCase().includes('contains');
    }
    return true;
  },
  {
    message: 'Description should mention allergen information when product contains allergens',
    path: ['description']
  }
);

// Category validation schema
export const categoryValidationSchema = z.object({
  categoryId: z.number().optional(),
  categoryName: z.string()
    .min(2, 'Category name must be at least 2 characters')
    .max(50, 'Category name must be less than 50 characters')
    .regex(/^[a-zA-Z\s&-]+$/, 'Category name can only contain letters, spaces, & and -'),
  description: z.string()
    .max(200, 'Description must be less than 200 characters')
    .optional(),
  isActive: z.boolean().optional()
});

// User validation schema with role-based rules
export const userValidationSchema = z.object({
  userId: z.number().optional(),
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscore and hyphen'),
  email: z.string()
    .email('Invalid email address')
    .max(100, 'Email must be less than 100 characters'),
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, apostrophes and hyphens'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, apostrophes and hyphens'),
  roleId: z.number()
    .positive('Please select a role'),
  districtId: z.number()
    .positive('Please select a district')
    .optional(),
  manufacturerId: z.number()
    .positive('Please select a manufacturer')
    .optional(),
  isActive: z.boolean().optional(),
  phoneNumber: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .optional()
    .or(z.literal(''))
}).refine(
  (data) => {
    // Custom validation: certain roles require district or manufacturer
    if (data.roleId === 3 || data.roleId === 4) { // District roles
      return !!data.districtId;
    }
    if (data.roleId === 5 || data.roleId === 6) { // Manufacturer roles
      return !!data.manufacturerId;
    }
    return true;
  },
  {
    message: 'This role requires a district or manufacturer assignment',
    path: ['roleId']
  }
);

// Allergen validation schema
export const allergenValidationSchema = z.object({
  allergenId: z.number().optional(),
  allergenName: z.string()
    .min(2, 'Allergen name must be at least 2 characters')
    .max(50, 'Allergen name must be less than 50 characters'),
  description: z.string()
    .max(200, 'Description must be less than 200 characters')
    .optional(),
  severity: z.enum(['Low', 'Medium', 'High'], {
    errorMap: () => ({ message: 'Please select a severity level' })
  }).optional(),
  isActive: z.boolean().optional()
});

// Ingredient validation schema
export const ingredientValidationSchema = z.object({
  ingredientId: z.number().optional(),
  ingredientName: z.string()
    .min(2, 'Ingredient name must be at least 2 characters')
    .max(100, 'Ingredient name must be less than 100 characters'),
  description: z.string()
    .max(500, 'Description must be less than 500 characters')
    .optional(),
  allergenId: z.number().optional(),
  isOrganic: z.boolean().optional(),
  isGMOFree: z.boolean().optional(),
  nutritionalInfo: z.string()
    .max(1000, 'Nutritional information must be less than 1000 characters')
    .optional()
});

// Manufacturer validation schema
export const manufacturerValidationSchema = z.object({
  manufacturerId: z.number().optional(),
  manufacturerName: z.string()
    .min(2, 'Manufacturer name must be at least 2 characters')
    .max(100, 'Manufacturer name must be less than 100 characters'),
  contactEmail: z.string()
    .email('Invalid email address')
    .optional()
    .or(z.literal('')),
  contactPhone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .optional()
    .or(z.literal('')),
  address: z.string()
    .max(200, 'Address must be less than 200 characters')
    .optional(),
  city: z.string()
    .max(50, 'City must be less than 50 characters')
    .optional(),
  stateId: z.number()
    .positive('Please select a state')
    .optional(),
  postalCode: z.string()
    .regex(/^\d{5}(-\d{4})?$/, 'Invalid postal code format')
    .optional()
    .or(z.literal('')),
  website: z.string()
    .url('Invalid website URL')
    .optional()
    .or(z.literal('')),
  isActive: z.boolean().optional()
});

// Create type-safe validation functions
export function validateProduct(data: unknown): ISaveProductModel | null {
  const result = productValidationSchema.safeParse(data);
  return result.success ? result.data as ISaveProductModel : null;
}

export function validateCategory(data: unknown): ISaveCategoryModel | null {
  const result = categoryValidationSchema.safeParse(data);
  return result.success ? result.data as ISaveCategoryModel : null;
}

export function validateUser(data: unknown): ISaveUserModel | null {
  const result = userValidationSchema.safeParse(data);
  return result.success ? result.data as ISaveUserModel : null;
}

export function validateAllergen(data: unknown): ISaveAllergenModel | null {
  const result = allergenValidationSchema.safeParse(data);
  return result.success ? result.data as ISaveAllergenModel : null;
}

export function validateIngredient(data: unknown): ISaveIngredientModel | null {
  const result = ingredientValidationSchema.safeParse(data);
  return result.success ? result.data as ISaveIngredientModel : null;
}

export function validateManufacturer(data: unknown): ISaveManufacturerModel | null {
  const result = manufacturerValidationSchema.safeParse(data);
  return result.success ? result.data as ISaveManufacturerModel : null;
}

/**
 * Get validation schema for entity type
 */
export function getValidationSchema(entityType: string): z.ZodSchema | null {
  switch (entityType) {
    case 'product':
      return productValidationSchema;
    case 'category':
      return categoryValidationSchema;
    case 'user':
      return userValidationSchema;
    case 'allergen':
      return allergenValidationSchema;
    case 'ingredient':
      return ingredientValidationSchema;
    case 'manufacturer':
      return manufacturerValidationSchema;
    default:
      return null;
  }
}