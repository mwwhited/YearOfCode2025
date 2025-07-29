import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ManufacturerClient from '@/api/GreenOnion/Clients/ManufacturerClient';
import ZQueryManufacturerModel from '@/api/GreenOnion/Schema/ZQueryManufacturerModel';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import { Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';

type Manufacturer = z.infer<typeof ZQueryManufacturerModel>;

export const ManufacturersList: React.FC = () => {
  const [manufacturers, setManufacturers] = useState<Manufacturer[] | null>(null);
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();

  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);

  useEffect(() => {
    loadManufacturers();
  }, []);

  const loadManufacturers = async () => {
    try {
      const client = new ManufacturerClient();
      const response = await client.Query({});
      
      if (response && response.rows) {
        setManufacturers(response.rows || []);
      } else {
        console.error('Failed to load manufacturers');
        setManufacturers([]);
      }
    } catch (err) {
      console.error('Failed to load manufacturers:', err);
      setManufacturers([]);
    }
  };


  return (
    <div className="manufacturers-list">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">Manufacturers</h1>
        <div className="flex gap-2">
          {canEdit && (
            <Button
              label="Add Manufacturer"
              icon="pi pi-plus"
              onClick={() => navigate('/manufacturers/edit-dynamic/new')}
            />
          )}
        </div>
      </div>

      <GenericDataTable
        schema={ZQueryManufacturerModel}
        data={manufacturers || []}
        columnOverrides={{
          manufacturerId: { header: 'ID' },
          manufacturerName: { header: 'Manufacturer Name' },
          glnNumber: { header: 'GLN Number' },
          userCount: { header: 'Users' },
          productCount: { header: 'Products' },
          isActive: { header: 'Status' }
        }}
      />
    </div>
  );
};