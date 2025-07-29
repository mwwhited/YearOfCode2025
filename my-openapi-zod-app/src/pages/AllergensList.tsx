import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AllergenClient from '@/api/GreenOnion/Clients/AllergenClient';
import ZQueryAllergenModel from '@/api/GreenOnion/Schema/ZQueryAllergenModel';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import { Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';

type Allergen = z.infer<typeof ZQueryAllergenModel>;

export const AllergensList: React.FC = () => {
  const [allergens, setAllergens] = useState<Allergen[] | null>(null);
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();

  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);

  useEffect(() => {
    loadAllergens();
  }, []);

  const loadAllergens = async () => {
    try {
      const client = new AllergenClient();
      const response = await client.Query({});
      
      if (response && response.rows) {
        setAllergens(response.rows || []);
      } else {
        setAllergens([]);
      }
    } catch (err) {
      console.error('Failed to load allergens:', err);
      setAllergens([]);
    }
  };

  const handleEditDynamic = (allergen: Allergen) => {
    navigate(`/allergens/edit-dynamic/${allergen.allergenId}`);
  };


  return (
    <div className="allergens-list">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">Allergens</h1>
        <div className="flex gap-2">
          {canEdit && (
            <Button
              label="Add Allergen"
              icon="pi pi-plus"
              onClick={() => navigate('/allergens/edit-dynamic/new')}
            />
          )}
        </div>
      </div>

      <GenericDataTable
        schema={ZQueryAllergenModel}
        data={allergens || []}
        columnOverrides={{
          allergenId: { header: 'ID' },
          allergenName: { header: 'Allergen Name' },
          allergenGroup: { header: 'Allergen Group' }
        }}
        actionColumn={canEdit ? {
          header: 'Actions',
          body: (rowData: Allergen) => (
            <div className="flex gap-1">
              <Button
                label="Edit"
                icon="pi pi-pencil"
                className="p-button-sm p-button-success"
                onClick={() => handleEditDynamic(rowData)}
              />
            </div>
          )
        } : undefined}
      />
    </div>
  );
};