import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SubCategoryClient from '@/api/GreenOnion/Clients/SubCategoryClient';
import ZQuerySubCategoryModel from '@/api/GreenOnion/Schema/ZQuerySubCategoryModel';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import { Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';

type SubCategory = z.infer<typeof ZQuerySubCategoryModel>;

export const SubCategoriesList: React.FC = () => {
  const [subCategories, setSubCategories] = useState<SubCategory[] | null>(null);
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();

  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);

  useEffect(() => {
    loadSubCategories();
  }, []);

  const loadSubCategories = async () => {
    try {
      const client = new SubCategoryClient();
      const response = await client.Query({});
      
      if (response && response.rows) {
        setSubCategories(response.rows || []);
      } else {
        console.error('Failed to load subcategories');
        setSubCategories([]);
      }
    } catch (err) {
      console.error('Failed to load subcategories:', err);
      setSubCategories([]);
    }
  };


  return (
    <div className="subcategories-list">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">Sub Categories</h1>
        <div className="flex gap-2">
          {canEdit && (
            <Button
              label="Add Sub Category"
              icon="pi pi-plus"
              onClick={() => navigate('/subcategories/edit-dynamic/new')}
            />
          )}
        </div>
      </div>

      <GenericDataTable
        schema={ZQuerySubCategoryModel}
        data={subCategories || []}
        columnOverrides={{
          subCategoryId: { header: 'ID' },
          subCategoryName: { header: 'Sub Category Name' },
          subCategoryCode: { header: 'Sub Category Code' },
          categoryId: { header: 'Category ID' },
          isActive: { header: 'Status' }
        }}
      />
    </div>
  );
};