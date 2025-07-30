import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductClient from '@/api/GreenOnion/Clients/ProductClient';
import ZSaveProductModel from '@/api/GreenOnion/Schema/ZSaveProductModel';
import { DynamicForm } from '@/components/forms/DynamicForm';
import { Card } from '@/components/controls';
import { auditLogger } from '@/utils/auditLogger';
import type { z } from 'zod';


export const EditProductDynamic: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<Record<string, string | number | boolean | null | undefined>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Removed options state as we're using simple number inputs now

  const isNew = id === 'new';

  useEffect(() => {
    // Log page view
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'EditProductDynamic',
      entityId: isNew ? undefined : id,
      details: { page: 'edit-product-dynamic', isNew }
    });

    if (!isNew && id) {
      loadProduct();
    }
  }, [id, isNew]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const client = new ProductClient();
      const response = await client.Get({ id: Number(id) });
      
      if (response) {
        // Log successful data retrieval
        await auditLogger.logSuccess({
          action: 'READ',
          entityType: 'Product',
          entityId: id,
          details: { action: 'load-for-edit' }
        });

        const formData: Record<string, string | number | boolean | null | undefined> = {
          productId: response.productId as any,
          productName: response.name as any,
          gtin: response.gtin as any,
          upc: response.upc as any,
          categoryId: response.categoryId as any,
          subCategoryId: response.subCategoryId as any,
          iocCategoryId: response.iocCategoryId as any,
          ingredients: response.ingredients as any,
          brandName: response.name as any,
          description: response.description as any,
          manufacturerId: response.manufacturerId as any,
          storageTypeId: response.storageTypeId as any,
          isActive: response.isActive as any
        };
        setInitialData(formData);
      } else {
        await auditLogger.logError({
          action: 'READ',
          entityType: 'Product',
          entityId: id,
          details: { action: 'load-for-edit' }
        }, 'Failed to load product - no response');
        setError('Failed to load product');
      }
    } catch (err) {
      await auditLogger.logError({
        action: 'READ',
        entityType: 'Product',
        entityId: id,
        details: { action: 'load-for-edit' }
      }, err as Error);
      setError(err instanceof Error ? err.message : 'Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: Record<string, string | number | boolean | null | undefined>) => {
    const action = isNew ? 'CREATE' : 'UPDATE';
    const entityId = isNew ? undefined : id;

    try {
      setLoading(true);
      setError(null);

      // Convert the form data to the expected SaveProduct format
      const saveData: z.infer<typeof ZSaveProductModel> = {
        productId: data.productId as number,
        productName: data.productName as string,
        gtin: data.gtin as string,
        upc: data.upc as string,
        categoryId: data.categoryId as number,
        subCategoryId: data.subCategoryId as number,
        iocCategoryId: data.iocCategoryId as number,
        ingredients: data.ingredients as string,
        brandName: data.brandName as string,
        description: data.description as string,
        manufacturerId: data.manufacturerId as number,
        storageTypeId: data.storageTypeId as number,
        manufacturerProductCode: data.manufacturerProductCode as string,
        isActive: data.isActive as boolean,
        allergenKeywords: data.allergenKeywords as string,
        vendor: data.vendor as string,
        productLabelPdfUrl: data.productLabelPdfUrl as string
      };

      const client = new ProductClient();
      const response = await client.Save({ body: saveData });

      if (response) {
        // Log successful save
        await auditLogger.logSuccess({
          action,
          entityType: 'Product',
          entityId: entityId || response.productId?.toString(),
          details: { 
            productName: saveData.productName,
            formType: 'dynamic',
            changes: Object.keys(data).filter(key => data[key] !== initialData[key])
          }
        });

        navigate('/products');
      } else {
        await auditLogger.logError({
          action,
          entityType: 'Product',
          entityId,
          details: { productName: saveData.productName, formType: 'dynamic' }
        }, 'Failed to save product - no response');
        setError('Failed to save product');
      }
    } catch (err) {
      await auditLogger.logError({
        action,
        entityType: 'Product',
        entityId,
        details: { productName: data.productName as string, formType: 'dynamic' }
      }, err as Error);
      setError(err instanceof Error ? err.message : 'Failed to save product');
    } finally {
      setLoading(false);
    }
  };

  const formConfig = {
    schema: ZSaveProductModel,
    fields: [
      {
        name: 'productName',
        label: 'Product Name',
        type: 'text' as const,
        required: true,
        placeholder: 'Enter product name'
      },
      {
        name: 'gtin',
        label: 'GTIN',
        type: 'text' as const,
        placeholder: 'Enter GTIN'
      },
      {
        name: 'upc',
        label: 'UPC',
        type: 'text' as const,
        placeholder: 'Enter UPC'
      },
      {
        name: 'brandName',
        label: 'Brand Name',
        type: 'text' as const,
        placeholder: 'Enter brand name'
      },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea' as const,
        placeholder: 'Enter product description'
      },
      {
        name: 'manufacturerId',
        label: 'Manufacturer ID',
        type: 'number' as const,
        placeholder: 'Enter manufacturer ID'
      },
      {
        name: 'categoryId',
        label: 'Category ID',
        type: 'number' as const,
        placeholder: 'Enter category ID'
      },
      {
        name: 'subCategoryId',
        label: 'Sub Category ID',
        type: 'number' as const,
        placeholder: 'Enter sub category ID'
      },
      {
        name: 'ingredients',
        label: 'Ingredients',
        type: 'textarea' as const,
        placeholder: 'Enter ingredients list'
      },
      {
        name: 'allergenKeywords',
        label: 'Allergen Keywords',
        type: 'text' as const,
        placeholder: 'Enter allergen keywords'
      },
      {
        name: 'vendor',
        label: 'Vendor',
        type: 'text' as const,
        placeholder: 'Enter vendor'
      },
      {
        name: 'manufacturerProductCode',
        label: 'Manufacturer Product Code',
        type: 'text' as const,
        placeholder: 'Enter manufacturer product code'
      },
      {
        name: 'productLabelPdfUrl',
        label: 'Product Label PDF URL',
        type: 'text' as const,
        placeholder: 'Enter PDF URL'
      },
      {
        name: 'isActive',
        label: 'Active',
        type: 'boolean' as const
      }
    ]
  };

  return (
    <div className="edit-product-dynamic">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">
          {isNew ? 'Add Product' : 'Edit Product'} (Dynamic Form)
        </h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="p-button p-button-outlined p-button-secondary"
          >
            <i className="pi pi-arrow-left mr-2" />
            Back to Products
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
          submitLabel={isNew ? 'Create Product' : 'Update Product'}
          submitIcon="pi pi-check"
        />
      </Card>
    </div>
  );
};