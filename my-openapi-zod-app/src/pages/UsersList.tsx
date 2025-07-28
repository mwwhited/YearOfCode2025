import React from 'react';
import { GenericDataTable } from '@/components/controls/GenericDataTable';
import ZQueryUserModel from '@/api/GreenOnion/Schema/ZQueryUserModel';
import UserClient from '@/api/GreenOnion/Clients/UserClient';
import type IUserClient from '@/api/GreenOnion/IUserClient';

const UsersList: React.FC = () => {
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
        />
      </div>
    </div>
  );
};

export default UsersList;