import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductClient from '@/api/GreenOnion/Clients/ProductClient';
import ZQueryProductModel from '@/api/GreenOnion/Schema/ZQueryProductModel';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import { Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';

type Product = z.infer<typeof ZQueryProductModel>;

export const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();

  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const client = new ProductClient();
      const response = await client.Query({});
      
      if (response && response.rows) {
        setProducts(response.rows || []);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error('Failed to load products:', err);
      setProducts([]);
    }
  };

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
    <div className="products-list">
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
        data={products || []}
        columnOverrides={{
          productId: { header: 'ID' },
          name: { header: 'Product Name' },
          manufacturerName: { header: 'Manufacturer' },
          isActive: { header: 'Status' }
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