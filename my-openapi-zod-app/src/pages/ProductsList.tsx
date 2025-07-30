import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductClient from '@/api/GreenOnion/Clients/ProductClient';
import ZQueryProductModel from '@/api/GreenOnion/Schema/ZQueryProductModel';
import { BulkEditDataTable } from '@/components/controls/BulkEditDataTable';
import { Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';
import type { BulkEditResult } from '@/components/BulkEditModal';
import type { FieldConfig } from '@/components/forms/DynamicForm';
import { BulkEditApiHandler } from '@/utils/bulkEditApi';
import { auditLogger } from '@/utils/auditLogger';

type Product = z.infer<typeof ZQueryProductModel>;

// Type adapter to convert API response to GenericDataTable expected format
const productClientAdapter = {
  Query: async (params: { body?: unknown }) => {
    const client = new ProductClient();
    const response = await client.Query(params as any);
    
    if (!response) return undefined;
    
    // Convert null values to undefined for compatibility
    return {
      rows: (response.rows as any) || undefined,
      currentPage: (response.currentPage as any) ?? undefined,
      totalPageCount: (response.totalPageCount as any) ?? undefined,
      totalRowCount: (response.totalRowCount as any) ?? undefined,
      messages: (response.messages as any) || undefined
    };
  }
};

export const ProductsList: React.FC = () => {
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();
  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);

  // Log page view
  useEffect(() => {
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'ProductsList',
      details: { page: 'products-list' }
    });
  }, []);

  const handleEditDynamic = (product: Product) => {
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'Product',
      entityId: String(product.productId),
      details: { action: 'navigate-to-edit', editType: 'dynamic' }
    });
    navigate(`/products/edit-dynamic/${product.productId as any}`);
  };

  const handleEditPanel = (product: Product) => {
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'Product',
      entityId: String(product.productId),
      details: { action: 'navigate-to-edit', editType: 'panel' }
    });
    navigate(`/products/edit-panel/${product.productId as any}`);
  };

  const handleViewCard = () => {
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'ProductsList',
      details: { action: 'navigate-to-cards' }
    });
    navigate('/products/cards');
  };

  // Bulk edit configuration
  const bulkEditFields: FieldConfig[] = [
    {
      name: 'manufacturerId',
      label: 'Manufacturer',
      type: 'number',
      placeholder: 'Leave empty to keep current manufacturer'
    },
    {
      name: 'categoryId',
      label: 'Category',
      type: 'number',
      placeholder: 'Leave empty to keep current category'
    },
    {
      name: 'isActive',
      label: 'Active Status',
      type: 'boolean'
    },
    {
      name: 'unitPrice',
      label: 'Unit Price',
      type: 'number',
      placeholder: 'Leave empty to keep current price'
    },
    {
      name: 'unitsInStock',
      label: 'Units in Stock',
      type: 'number',
      placeholder: 'Leave empty to keep current stock'
    }
  ];

  const handleBulkEdit = useCallback(async (
    changes: Record<string, unknown>,
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> => {
    // Log bulk edit attempt
    await auditLogger.logSuccess({
      action: 'BULK_UPDATE',
      entityType: 'Product',
      details: { 
        itemCount: selectedIds.length, 
        changes: Object.keys(changes) 
      }
    });

    try {
      const results = await BulkEditApiHandler.executeBulkEdit('products', changes, selectedIds);
      
      // Log detailed bulk results
      const bulkResults = results.map(result => ({
        id: (result as any).key || (result as any).id,
        success: (result as any).status === 'Changed',
        error: (result as any).status === 'Error' ? 'Update failed' : undefined
      }));

      await auditLogger.logBulkActions(
        { action: 'BULK_UPDATE', entityType: 'Product', details: { changes } },
        selectedIds,
        bulkResults
      );

      return results;
    } catch (error) {
      await auditLogger.logError({
        action: 'BULK_UPDATE',
        entityType: 'Product',
        details: { itemCount: selectedIds.length, changes: Object.keys(changes) }
      }, error as Error);
      throw error;
    }
  }, []);

  return (
    <div className="products-list page-container">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">Products</h1>
        <div className="flex gap-2">
          <Button
            label="Card View"
            icon="pi pi-th-large"
            className="p-button-outlined"
            onClick={handleViewCard}
          />
          {canEdit && (
            <Button
              label="Add Product"
              icon="pi pi-plus"
              onClick={() => navigate('/products/edit-dynamic/new')}
            />
          )}
        </div>
      </div>

      <BulkEditDataTable
        schema={ZQueryProductModel}
        client={productClientAdapter}
        enableServerSide={true}
        enableColumnFilters={true}
        enableAdvancedFilters={true}
        enableSidebarFilters={true}
        enableExport={true}
        enableBulkEdit={canEdit}
        bulkEditFields={bulkEditFields}
        onBulkEdit={handleBulkEdit}
        keyField="productId"
        bulkEditTitle="Bulk Edit Products"
        defaultPageSize={25}
        defaultSortField="name"
        defaultSortOrder="asc"
        columnOverrides={{
          productId: { header: 'ID', filterType: 'number' },
          name: { header: 'Product Name', filterType: 'text' },
          manufacturerName: { header: 'Manufacturer', filterType: 'text' },
          category: { header: 'Category', filterType: 'text' },
          isActive: { 
            header: 'Status', 
            filterType: 'boolean'
          },
          createdOn: { header: 'Created', filterType: 'date' },
          // Hide complex object fields that aren't suitable for table display
          nutritionalInformation: { hidden: true },
          ingredients: { hidden: true },
          hasAllergens: { hidden: true }
        }}
        actionColumn={canEdit ? {
          header: 'Actions',
          body: (rowData: Product) => (
            <div className="flex gap-1">
              <Button
                label="Edit"
                icon="pi pi-pencil"
                className="p-button-sm p-button-success"
                onClick={() => handleEditDynamic(rowData)}
              />
              <Button
                label="Panel"
                icon="pi pi-cog"
                className="p-button-sm p-button-info"
                onClick={() => handleEditPanel(rowData)}
              />
            </div>
          )
        } : undefined}
      />
    </div>
  );
};