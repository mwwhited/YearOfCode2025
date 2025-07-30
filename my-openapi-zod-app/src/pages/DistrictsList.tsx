import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SchoolDistrictClient from '@/api/GreenOnion/Clients/SchoolDistrictClient';
import ZQuerySchoolDistrictModel from '@/api/GreenOnion/Schema/ZQuerySchoolDistrictModel';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import { Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';
import { ROLE_GROUPS } from '@/types/roles';
import type { z } from 'zod';

type District = z.infer<typeof ZQuerySchoolDistrictModel>;

export const DistrictsList: React.FC = () => {
  const [districts, setDistricts] = useState<District[] | null>(null);
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();

  const canEdit = hasAnyRole(ROLE_GROUPS.ADMIN_ROLES);

  useEffect(() => {
    loadDistricts();
  }, []);

  const loadDistricts = async () => {
    try {
      const client = new SchoolDistrictClient();
      const response = await client.Query({});
      
      if (response && response.rows) {
        setDistricts((response.rows as any) || []);
      } else {
        console.error('Failed to load districts');
        setDistricts([]);
      }
    } catch (err) {
      console.error('Failed to load districts:', err);
      setDistricts([]);
    }
  };


  return (
    <div className="districts-list">
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl font-bold text-900 m-0">School Districts</h1>
        <div className="flex gap-2">
          {canEdit && (
            <Button
              label="Add District"
              icon="pi pi-plus"
              onClick={() => navigate('/districts/edit-dynamic/new')}
            />
          )}
        </div>
      </div>

      <GenericDataTable
        schema={ZQuerySchoolDistrictModel}
        data={districts || []}
        columnOverrides={{
          schoolDistrictId: { header: 'ID' },
          districtName: { header: 'District Name' },
          siteCode: { header: 'Site Code' },
          city: { header: 'City' },
          state: { header: 'State' },
          isActive: { header: 'Status' }
        }}
      />
    </div>
  );
};