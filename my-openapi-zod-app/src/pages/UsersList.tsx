import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import { Button } from '@/components/controls';
import ZQueryUserModel from '@/api/GreenOnion/Schema/ZQueryUserModel';
import UserClient from '@/api/GreenOnion/Clients/UserClient';
import type { IQueryUserModel } from '@/api/GreenOnion';

// Type adapter to convert API response to GenericDataTable expected format
const userClientAdapter = {
  Query: async (params: { body?: unknown }) => {
    const client = new UserClient();
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

const UsersList: React.FC = () => {
  const navigate = useNavigate();

  // Custom column headers for better user experience
  const columnOverrides = {
    firstName: { header: 'First Name' },
    lastName: { header: 'Last Name' },
    email: { header: 'Email Address' },
    roleName: { header: 'Role' },
    isActive: { header: 'Status' },
    mobile: { header: 'Phone' },
    city: { header: 'City' },
    state: { header: 'State' },
    createdOn: { header: 'Created Date' },
    updatedOn: { header: 'Last Updated' }
  };

  // Action buttons for each user row
  const actionTemplate = (rowData: IQueryUserModel) => {
    return (
      <Button
        icon="pi pi-pencil"
        size="small"
        className="p-button-rounded p-button-text p-button-primary"
        tooltip="Edit User"
        onClick={() => navigate(`/users/${rowData.userId}/edit`)}
      />
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-primary mb-2">User Management</h1>
        <p className="text-600">Manage system users and their permissions</p>
      </div>

      <div className="card">
        <GenericDataTable
          schema={ZQueryUserModel}
          columnOverrides={columnOverrides}
          client={userClientAdapter}
          actionColumn={{
            header: 'Actions',
            body: actionTemplate,
            style: { width: '120px' }
          }}
        />
      </div>
    </div>
  );
};

export default UsersList;