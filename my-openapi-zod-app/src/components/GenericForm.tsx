import { useState } from 'react';
import { z } from 'zod';

type GenericFormProps<T extends Record<string, unknown>> = {
  schema: z.ZodObject<any>;
  onSubmit: (data: T) => void | Promise<void>;
  initialData?: Partial<T>;
  submitText?: string;
  disabled?: boolean;
};

function GenericForm<T extends Record<string, unknown>>({
  schema,
  onSubmit,
  initialData = {},
  submitText = 'Submit',
  disabled = false,
}: GenericFormProps<T>) {
  const [formData, setFormData] = useState<Record<string, unknown>>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    try {
      schema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData as T);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (fieldName: string, fieldSchema: z.ZodTypeAny) => {
    const value = formData[fieldName] ?? '';
    const error = errors[fieldName];
    
    // Get field type from schema
    const fieldType = fieldSchema._def.typeName;
    
    const commonProps = {
      id: fieldName,
      name: fieldName,
      value: value as string,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        handleChange(fieldName, e.target.value),
      style: {
        width: '100%',
        padding: '8px',
        border: error ? '1px solid #ff0000' : '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
      },
      disabled: disabled || isSubmitting,
    };

    let inputElement: React.ReactElement;

    switch (fieldType) {
      case 'ZodNumber':
        inputElement = (
          <input
            {...commonProps}
            type="number"
            onChange={(e) => handleChange(fieldName, Number(e.target.value))}
          />
        );
        break;
      case 'ZodBoolean':
        inputElement = (
          <input
            {...commonProps}
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => handleChange(fieldName, e.target.checked)}
            style={{ ...commonProps.style, width: 'auto' }}
          />
        );
        break;
      case 'ZodString':
        // Check if it's an email field
        if (fieldName.toLowerCase().includes('email')) {
          inputElement = <input {...commonProps} type="email" />;
        } else if (fieldName.toLowerCase().includes('password')) {
          inputElement = <input {...commonProps} type="password" />;
        } else {
          inputElement = <input {...commonProps} type="text" />;
        }
        break;
      default:
        inputElement = <input {...commonProps} type="text" />;
    }

    return (
      <div key={fieldName} style={{ marginBottom: '16px' }}>
        <label 
          htmlFor={fieldName}
          style={{ 
            display: 'block', 
            marginBottom: '4px', 
            fontWeight: 'bold',
            fontSize: '14px' 
          }}
        >
          {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
        </label>
        {inputElement}
        {error && (
          <div style={{ 
            color: '#ff0000', 
            fontSize: '12px', 
            marginTop: '4px' 
          }}>
            {error}
          </div>
        )}
      </div>
    );
  };

  const shape = schema.shape;
  
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
      {Object.entries(shape).map(([fieldName, fieldSchema]) => 
        renderField(fieldName, fieldSchema as z.ZodTypeAny)
      )}
      
      <button
        type="submit"
        disabled={disabled || isSubmitting}
        style={{
          backgroundColor: disabled || isSubmitting ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: disabled || isSubmitting ? 'not-allowed' : 'pointer',
          width: '100%',
        }}
      >
        {isSubmitting ? 'Submitting...' : submitText}
      </button>
    </form>
  );
}

export default GenericForm;