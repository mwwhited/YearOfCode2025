import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryClient from '@/api/GreenOnion/Clients/CategoryClient';
import ZQueryCategoryModel from '@/api/GreenOnion/Schema/ZQueryCategoryModel';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import { Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';

type Category = z.infer<typeof ZQueryCategoryModel>;

export const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();

  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const client = new CategoryClient();
      const response = await client.Query({});
      
      if (response && response.rows) {
        setCategories(response.rows || []);
      } else {
        setCategories([]);
      }
    } catch (err) {
      console.error('Failed to load categories:', err);
      setCategories([]);
    }
  };

  const handleEditDynamic = (category: Category) => {
    navigate(`/categories/edit-dynamic/${category.categoryId}`);
  };

  const handleEditPanel = (category: Category) => {
    navigate(`/categories/edit-panel/${category.categoryId}`);
  };

  return (
    <div className="categories-list">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">Categories</h1>
        <div className="flex gap-2">
          {canEdit && (
            <Button
              label="Add Category"
              icon="pi pi-plus"
              onClick={() => navigate('/categories/edit-dynamic/new')}
            />
          )}
        </div>
      </div>

      <GenericDataTable
        schema={ZQueryCategoryModel}
        data={categories || []}
        columnOverrides={{
          categoryId: { header: 'ID' },
          categoryName: { header: 'Category Name' },
          categoryCode: { header: 'Category Code' },
          isActive: { header: 'Status' },
          createdBy: { header: 'Created By' },
          createdOn: { header: 'Created On' }
        }}
        actionColumn={canEdit ? {
          header: 'Actions',
          body: (rowData: Category) => (
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