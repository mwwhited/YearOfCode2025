import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoryClient from '@/api/GreenOnion/Clients/CategoryClient';
import ZSaveCategoryModel from '@/api/GreenOnion/Schema/ZSaveCategoryModel';
import { Button, InputText, Checkbox, Fieldset } from '@/components/controls';
import type { z } from 'zod';

type SaveCategory = z.infer<typeof ZSaveCategoryModel>;

interface ValidationErrors {
  [key: string]: string | undefined;
}

export const EditCategoryPanel: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SaveCategory>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const isNew = id === 'new';

  useEffect(() => {
    if (!isNew && id) {
      loadCategory();
    }
  }, [id]);

  const loadCategory = async () => {
    try {
      setLoading(true);
      const client = new CategoryClient();
      const response = await client.Get({ id: Number(id) });
      
      if (response) {
        setFormData({
          categoryId: response.categoryId,
          categoryName: response.categoryName,
          categoryCode: response.categoryCode,
          isActive: response.isActive
        });
      } else {
        setError('Failed to load category');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load category');
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (field: keyof SaveCategory, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.categoryName?.trim()) {
      newErrors.categoryName = 'Category name is required';
    }

    if (!formData.categoryCode?.trim()) {
      newErrors.categoryCode = 'Category code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const client = new CategoryClient();
      const response = await client.Save({ body: formData });

      if (response) {
        navigate('/categories');
      } else {
        setError('Failed to save category');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-category-panel">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">
          {isNew ? 'Add Category' : 'Edit Category'} (Panel Form)
        </h1>
        <div className="flex gap-2">
          <Button
            label="Back to Categories"
            icon="pi pi-arrow-left"
            className="p-button-outlined p-button-secondary"
            onClick={() => navigate('/categories')}
          />
        </div>
      </div>

      {error && (
        <div className="p-message p-message-error mb-4">
          <div className="p-message-wrapper">
            <div className="p-message-icon">
              <i className="pi pi-times-circle" />
            </div>
            <div className="p-message-text">{error}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <Fieldset legend="Category Information" className="mb-4">
          <div className="grid">
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="categoryName" className="font-semibold">
                  Category Name <span className="text-red-500">*</span>
                </label>
                <InputText
                  id="categoryName"
                  value={formData.categoryName || ''}
                  onChange={(e) => handleFieldChange('categoryName', e.target.value)}
                  className={errors.categoryName ? 'p-invalid w-full' : 'w-full'}
                  placeholder="Enter category name"
                />
                {errors.categoryName && (
                  <small className="p-error">{errors.categoryName}</small>
                )}
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="categoryCode" className="font-semibold">
                  Category Code <span className="text-red-500">*</span>
                </label>
                <InputText
                  id="categoryCode"
                  value={formData.categoryCode || ''}
                  onChange={(e) => handleFieldChange('categoryCode', e.target.value)}
                  className={errors.categoryCode ? 'p-invalid w-full' : 'w-full'}
                  placeholder="Enter category code"
                />
                {errors.categoryCode && (
                  <small className="p-error">{errors.categoryCode}</small>
                )}
              </div>
            </div>
          </div>
        </Fieldset>

        <Fieldset legend="Status" className="mb-4">
          <div className="field-checkbox">
            <Checkbox
              id="isActive"
              checked={formData.isActive || false}
              onChange={(e) => handleFieldChange('isActive', e.checked)}
            />
            <label htmlFor="isActive" className="font-semibold ml-2">Active</label>
          </div>
        </Fieldset>

        <div className="flex justify-content-end gap-2 mt-4">
          <Button
            type="button"
            label="Cancel"
            icon="pi pi-times"
            className="p-button-outlined"
            onClick={() => navigate('/categories')}
          />
          <Button
            type="submit"
            label={isNew ? 'Create Category' : 'Update Category'}
            icon="pi pi-check"
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};