import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductClient from '@/api/GreenOnion/Clients/ProductClient';
import CategoryClient from '@/api/GreenOnion/Clients/CategoryClient';
import SubCategoryClient from '@/api/GreenOnion/Clients/SubCategoryClient';
import ManufacturerClient from '@/api/GreenOnion/Clients/ManufacturerClient';
import ZSaveProductModel from '@/api/GreenOnion/Schema/ZSaveProductModel';
import { Button, InputText, InputTextarea, Dropdown, Checkbox, Fieldset } from '@/components/controls';
import type { z } from 'zod';

type SaveProduct = z.infer<typeof ZSaveProductModel>;

interface ValidationErrors {
  [key: string]: string | undefined;
}

export const EditProductPanel: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SaveProduct>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [options, setOptions] = useState({
    categories: [] as Array<{ label: string; value: number }>,
    subCategories: [] as Array<{ label: string; value: number }>,
    manufacturers: [] as Array<{ label: string; value: number }>
  });

  const isNew = id === 'new';

  useEffect(() => {
    loadOptions();
    if (!isNew && id) {
      loadProduct();
    }
  }, [id]);

  const loadOptions = async () => {
    try {
      const [categoriesResp, subCategoriesResp, manufacturersResp] = await Promise.all([
        new CategoryClient().Query({}),
        new SubCategoryClient().Query({}),
        new ManufacturerClient().Query({})
      ]);

      setOptions({
        categories: (categoriesResp?.rows as any)?.map((cat: any) => ({ 
          label: cat.categoryName || '', 
          value: cat.categoryId || 0 
        })) || [],
        subCategories: (subCategoriesResp?.rows as any)?.map((sub: any) => ({ 
          label: sub.subCategoryName || '', 
          value: sub.subCategoryId || 0 
        })) || [],
        manufacturers: (manufacturersResp?.rows as any)?.map((mfr: any) => ({ 
          label: mfr.manufacturerName || '', 
          value: mfr.manufacturerId || 0 
        })) || []
      });
    } catch (err) {
      console.error('Failed to load options:', err);
    }
  };

  const loadProduct = async () => {
    try {
      setLoading(true);
      const client = new ProductClient();
      const response = await client.Get({ id: Number(id) });
      
      if (response) {
        setFormData({
          productId: response.productId,
          productName: response.name,
          gtin: response.gtin,
          upc: response.upc,
          categoryId: response.categoryId,
          subCategoryId: response.subCategoryId,
          iocCategoryId: response.iocCategoryId,
          ingredients: response.ingredients,
          brandName: response.name,
          description: response.description,
          manufacturerId: response.manufacturerId,
          storageTypeId: response.storageTypeId,
          isActive: response.isActive,
          allergenKeywords: '',
          vendor: '',
          manufacturerProductCode: '',
          productLabelPdfUrl: ''
        });
      } else {
        setError('Failed to load product');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (field: keyof SaveProduct, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!(formData.productName as any)?.trim()) {
      newErrors.productName = 'Product name is required';
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

      const client = new ProductClient();
      const response = await client.Save({ body: formData });

      if (response) {
        navigate('/products');
      } else {
        setError('Failed to save product');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-product-panel">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">
          {isNew ? 'Add Product' : 'Edit Product'} (Panel Form)
        </h1>
        <div className="flex gap-2">
          <Button
            label="Back to Products"
            icon="pi pi-arrow-left"
            className="p-button-outlined p-button-secondary"
            onClick={() => navigate('/products')}
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
        <Fieldset legend="Basic Information" className="mb-4">
          <div className="grid">
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="productName" className="font-semibold">
                  Product Name <span className="text-red-600">*</span>
                </label>
                <InputText
                  id="productName"
                  value={(formData.productName as any) || ''}
                  onChange={(e) => handleFieldChange('productName', e.target.value)}
                  className={errors.productName ? 'p-invalid w-full' : 'w-full'}
                  placeholder="Enter product name"
                />
                {errors.productName && (
                  <small className="p-error">{errors.productName}</small>
                )}
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="brandName" className="font-semibold">Brand Name</label>
                <InputText
                  id="brandName"
                  value={(formData.brandName as any) || ''}
                  onChange={(e) => handleFieldChange('brandName', e.target.value)}
                  className="w-full"
                  placeholder="Enter brand name"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="field">
                <label htmlFor="description" className="font-semibold">Description</label>
                <InputTextarea
                  id="description"
                  value={(formData.description as any) || ''}
                  onChange={(e) => handleFieldChange('description', e.target.value)}
                  className="w-full"
                  placeholder="Enter product description"
                  rows={3}
                />
              </div>
            </div>
          </div>
        </Fieldset>

        <Fieldset legend="Product Identification" className="mb-4">
          <div className="grid">
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="gtin" className="font-semibold">GTIN</label>
                <InputText
                  id="gtin"
                  value={(formData.gtin as any) || ''}
                  onChange={(e) => handleFieldChange('gtin', e.target.value)}
                  className="w-full"
                  placeholder="Enter GTIN"
                />
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="upc" className="font-semibold">UPC</label>
                <InputText
                  id="upc"
                  value={(formData.upc as any) || ''}
                  onChange={(e) => handleFieldChange('upc', e.target.value)}
                  className="w-full"
                  placeholder="Enter UPC"
                />
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="manufacturerProductCode" className="font-semibold">Manufacturer Product Code</label>
                <InputText
                  id="manufacturerProductCode"
                  value={(formData.manufacturerProductCode as any) || ''}
                  onChange={(e) => handleFieldChange('manufacturerProductCode', e.target.value)}
                  className="w-full"
                  placeholder="Enter manufacturer product code"
                />
              </div>
            </div>
          </div>
        </Fieldset>

        <Fieldset legend="Classification" className="mb-4">
          <div className="grid">
            <div className="col-12 md:col-4">
              <div className="field">
                <label htmlFor="manufacturerId" className="font-semibold">Manufacturer</label>
                <Dropdown
                  id="manufacturerId"
                  value={formData.manufacturerId}
                  options={options.manufacturers}
                  onChange={(e) => handleFieldChange('manufacturerId', e.value)}
                  className="w-full"
                  placeholder="Select manufacturer"
                />
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className="field">
                <label htmlFor="categoryId" className="font-semibold">Category</label>
                <Dropdown
                  id="categoryId"
                  value={formData.categoryId}
                  options={options.categories}
                  onChange={(e) => handleFieldChange('categoryId', e.value)}
                  className="w-full"
                  placeholder="Select category"
                />
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className="field">
                <label htmlFor="subCategoryId" className="font-semibold">Sub Category</label>
                <Dropdown
                  id="subCategoryId"
                  value={formData.subCategoryId}
                  options={options.subCategories}
                  onChange={(e) => handleFieldChange('subCategoryId', e.value)}
                  className="w-full"
                  placeholder="Select sub category"
                />
              </div>
            </div>
          </div>
        </Fieldset>

        <Fieldset legend="Product Details" className="mb-4">
          <div className="grid">
            <div className="col-12">
              <div className="field">
                <label htmlFor="ingredients" className="font-semibold">Ingredients</label>
                <InputTextarea
                  id="ingredients"
                  value={(formData.ingredients as any) || ''}
                  onChange={(e) => handleFieldChange('ingredients', e.target.value)}
                  className="w-full"
                  placeholder="Enter ingredients list"
                  rows={3}
                />
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="allergenKeywords" className="font-semibold">Allergen Keywords</label>
                <InputText
                  id="allergenKeywords"
                  value={(formData.allergenKeywords as any) || ''}
                  onChange={(e) => handleFieldChange('allergenKeywords', e.target.value)}
                  className="w-full"
                  placeholder="Enter allergen keywords"
                />
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="field">
                <label htmlFor="vendor" className="font-semibold">Vendor</label>
                <InputText
                  id="vendor"
                  value={(formData.vendor as any) || ''}
                  onChange={(e) => handleFieldChange('vendor', e.target.value)}
                  className="w-full"
                  placeholder="Enter vendor"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="field">
                <label htmlFor="productLabelPdfUrl" className="font-semibold">Product Label PDF URL</label>
                <InputText
                  id="productLabelPdfUrl"
                  value={(formData.productLabelPdfUrl as any) || ''}
                  onChange={(e) => handleFieldChange('productLabelPdfUrl', e.target.value)}
                  className="w-full"
                  placeholder="Enter PDF URL"
                />
              </div>
            </div>
          </div>
        </Fieldset>

        <Fieldset legend="Status" className="mb-4">
          <div className="field-checkbox">
            <Checkbox
              id="isActive"
              checked={(formData.isActive as any) || false}
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
            onClick={() => navigate('/products')}
          />
          <Button
            type="submit"
            label={isNew ? 'Create Product' : 'Update Product'}
            icon="pi pi-check"
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};