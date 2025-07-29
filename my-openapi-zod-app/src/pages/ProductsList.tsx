import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductClient from '@/api/GreenOnion/Clients/ProductClient';
import ZQueryProductModel from '@/api/GreenOnion/Schema/ZQueryProductModel';
import { GenericDataTable, SidebarFilterEditor } from '@/components/controls';
import { Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';

type Product = z.infer<typeof ZQueryProductModel>;

export const ProductsList: React.FC = () => {
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();

  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);
  const productClient = new ProductClient();

  const handleEditDynamic = (product: Product) => {
    navigate(`/products/edit-dynamic/${product.productId}`);
  };

  const handleEditPanel = (product: Product) => {
    navigate(`/products/edit-panel/${product.productId}`);
  };

  const handleViewCard = () => {
    navigate('/products/cards');
  };

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

      <GenericDataTable
        schema={ZQueryProductModel}
        client={productClient}
        enableServerSide={true}
        enableColumnFilters={true}
        enableAdvancedFilters={true}
        enableSidebarFilters={true}
        defaultPageSize={25}
        defaultSortField="name"
        defaultSortOrder="asc"
        columnOverrides={{
          productId: { header: 'ID', filterType: 'number' },
          name: { header: 'Product Name', filterType: 'text' },
          manufacturerName: { header: 'Manufacturer', filterType: 'text' },
          categoryName: { header: 'Category', filterType: 'text' },
          isActive: { 
            header: 'Status', 
            filterType: 'boolean'
          },
          createdOn: { header: 'Created', filterType: 'date' },
          // Hide complex object fields that aren't suitable for table display
          nutritionFacts: { hidden: true },
          ingredients: { hidden: true },
          allergens: { hidden: true }
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