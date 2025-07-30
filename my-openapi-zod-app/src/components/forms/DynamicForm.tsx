/**
 * Dynamic Form Component
 * Generates form controls based on schema and field configuration
 */

import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { 
  InputText, 
  Button, 
  Checkbox, 
  InputTextarea 
} from '@/components/controls';
import { logger } from '@/utils/logger';
// import { useValidation } from '@/hooks/useValidation';
// import { validateForm } from '@/utils/validation';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'boolean' | 'number';
  required?: boolean;
  placeholder?: string;
  defaultValue?: string | number | boolean;
  rows?: number; // For textarea
  min?: number; // For number
  max?: number; // For number
}

export interface FormConfig {
  schema: z.ZodSchema;
  fields: FieldConfig[];
}

interface DynamicFormProps {
  config: FormConfig;
  initialData?: Record<string, string | number | boolean | null | undefined>;
  onSubmit: (data: Record<string, string | number | boolean | null | undefined>) => void;
  loading?: boolean;
  submitLabel?: string;
  submitIcon?: string;
  className?: string;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({
  config,
  initialData = {},
  onSubmit,
  loading = false,
  submitLabel = 'Submit',
  submitIcon = 'pi pi-check',
  className = ''
}) => {
  const [formData, setFormData] = useState<Record<string, string | number | boolean | null | undefined>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Initialize form data
  useEffect(() => {
    const initialFormData: Record<string, string | number | boolean | null | undefined> = {};
    
    config.fields.forEach(field => {
      const initialValue = initialData[field.name] ?? field.defaultValue ?? '';
      initialFormData[field.name] = initialValue;
    });
    
    setFormData(initialFormData);
    logger.debug('Dynamic form initialized:', { initialFormData, initialData });
  }, [config.fields, initialData]);

  // Validate field
  const validateField = (name: string, value: string | number | boolean | null | undefined): string | null => {
    const field = config.fields.find(f => f.name === name);
    if (!field) return null;

    // Required validation
    if (field.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return `${field.label} is required`;
    }

    // Email validation
    if (field.type === 'email' && value && typeof value === 'string') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    // Number validation
    if (field.type === 'number' && value !== '' && value !== null && value !== undefined) {
      const numValue = Number(value);
      if (isNaN(numValue)) {
        return 'Please enter a valid number';
      }
      if (field.min !== undefined && numValue < field.min) {
        return `Value must be at least ${field.min}`;
      }
      if (field.max !== undefined && numValue > field.max) {
        return `Value must be at most ${field.max}`;
      }
    }

    return null;
  };

  // Handle field change
  const handleFieldChange = (name: string, value: string | number | boolean | null | undefined) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched(prev => ({ ...prev, [name]: true }));
    }
  };

  // Handle field blur
  const handleFieldBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, formData[name]);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // Validate all fields
  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    config.fields.forEach(field => {
      const error = validateField(field.name, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(
      config.fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
    );

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateAll()) {
      logger.warn('Form validation failed', errors);
      return;
    }

    try {
      // Validate with Zod schema
      const validatedData = config.schema.parse(formData);
      logger.info('Form submitted with validated data:', validatedData);
      onSubmit(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const zodErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path.length > 0) {
            zodErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(zodErrors);
        logger.error('Zod validation failed:', zodErrors);
      } else {
        logger.error('Form submission error:', error);
      }
    }
  };

  // Render field based on type
  const renderField = (field: FieldConfig) => {
    const fieldError = touched[field.name] ? errors[field.name] : '';
    const fieldValue = formData[field.name] ?? '';
    const stringValue = typeof fieldValue === 'string' ? fieldValue : String(fieldValue || '');

    switch (field.type) {
      case 'boolean':
        return (
          <div key={field.name} className="field">
            <div className="flex align-items-center">
              <Checkbox
                id={field.name}
                checked={!!fieldValue}
                onChange={(e) => handleFieldChange(field.name, e.checked)}
                className={fieldError ? 'p-invalid' : ''}
              />
              <label htmlFor={field.name} className="ml-2">
                {field.label}
                {field.required && <span className="text-red-600 ml-1">*</span>}
              </label>
            </div>
            {fieldError && (
              <small className="p-error">{fieldError}</small>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div key={field.name} className="field">
            <label htmlFor={field.name} className="font-semibold">
              {field.label}
              {field.required && <span className="text-red-600 ml-1">*</span>}
            </label>
            <InputTextarea
              id={field.name}
              value={stringValue}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              rows={field.rows || 3}
              className={fieldError ? 'p-invalid w-full' : 'w-full'}
            />
            {fieldError && (
              <small className="p-error">{fieldError}</small>
            )}
          </div>
        );

      case 'number':
        return (
          <div key={field.name} className="field">
            <label htmlFor={field.name} className="font-semibold">
              {field.label}
              {field.required && <span className="text-red-600 ml-1">*</span>}
            </label>
            <InputText
              id={field.name}
              type="number"
              value={stringValue}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              min={field.min}
              max={field.max}
              className={fieldError ? 'p-invalid w-full' : 'w-full'}
            />
            {fieldError && (
              <small className="p-error">{fieldError}</small>
            )}
          </div>
        );

      default: // text, email
        return (
          <div key={field.name} className="field">
            <label htmlFor={field.name} className="font-semibold">
              {field.label}
              {field.required && <span className="text-red-600 ml-1">*</span>}
            </label>
            <InputText
              id={field.name}
              type={field.type === 'email' ? 'email' : 'text'}
              value={stringValue}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              className={fieldError ? 'p-invalid w-full' : 'w-full'}
            />
            {fieldError && (
              <small className="p-error">{fieldError}</small>
            )}
          </div>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid">
        {config.fields.map(field => (
          <div key={field.name} className="col-12 md:col-6">
            {renderField(field)}
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-top-1 surface-border">
        <Button
          type="submit"
          label={submitLabel}
          icon={submitIcon}
          loading={loading}
          className="p-button-primary"
        />
      </div>
    </form>
  );
};