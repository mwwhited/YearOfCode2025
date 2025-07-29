import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoryClient from '@/api/GreenOnion/Clients/CategoryClient';
import ZSaveCategoryModel from '@/api/GreenOnion/Schema/ZSaveCategoryModel';
import { DynamicForm } from '@/components/forms/DynamicForm';
import { Card } from '@/components/controls';
import type { z } from 'zod';

type SaveCategory = z.infer<typeof ZSaveCategoryModel>;

export const EditCategoryDynamic: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<SaveCategory>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        setInitialData({
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

  const handleSubmit = async (data: SaveCategory) => {
    try {
      setLoading(true);
      setError(null);

      const client = new CategoryClient();
      const response = await client.Save({ body: data });

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

  const formConfig = {
    schema: ZSaveCategoryModel,
    fields: [
      {
        name: 'categoryName',
        label: 'Category Name',
        type: 'text' as const,
        required: true,
        placeholder: 'Enter category name'
      },
      {
        name: 'categoryCode',
        label: 'Category Code',
        type: 'text' as const,
        required: true,
        placeholder: 'Enter category code'
      },
      {
        name: 'isActive',
        label: 'Active',
        type: 'boolean' as const
      }
    ]
  };

  return (
    <div className="edit-category-dynamic">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">
          {isNew ? 'Add Category' : 'Edit Category'} (Dynamic Form)
        </h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => navigate('/categories')}
            className="p-button p-button-outlined p-button-secondary"
          >
            <i className="pi pi-arrow-left mr-2" />
            Back to Categories
          </button>
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

      <Card>
        <DynamicForm
          config={formConfig}
          initialData={initialData}
          onSubmit={handleSubmit}
          loading={loading}
          submitLabel={isNew ? 'Create Category' : 'Update Category'}
          submitIcon="pi pi-check"
        />
      </Card>
    </div>
  );
};