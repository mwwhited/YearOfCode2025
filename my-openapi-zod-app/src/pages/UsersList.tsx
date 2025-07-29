import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import { Button } from '@/components/controls';
import ZQueryUserModel from '@/api/GreenOnion/Schema/ZQueryUserModel';
import UserClient from '@/api/GreenOnion/Clients/UserClient';
import type IUserClient from '@/api/GreenOnion/IUserClient';
import type { IQueryUserModel } from '@/api/GreenOnion';

const UsersList: React.FC = () => {
  const navigate = useNavigate();
  
  // Create an instance of UserClient
  const userClient: IUserClient = new UserClient();

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
      <div className="flex gap-2">
        <Button
          icon="pi pi-cog"
          size="small"
          className="p-button-rounded p-button-text p-button-secondary"
          tooltip="Edit with Dynamic Form"
          onClick={() => navigate(`/users/${rowData.userId}/edit-dynamic`)}
        />
        <Button
          icon="pi pi-list"
          size="small"
          className="p-button-rounded p-button-text p-button-info"
          tooltip="Edit with Panel Form"
          onClick={() => navigate(`/users/${rowData.userId}/edit-panel`)}
        />
      </div>
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
          client={userClient}
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