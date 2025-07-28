/**
 * User Profile Page
 * Displays user information and allows profile management
 */

import React from 'react';
import { Card, Button } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';

export const Profile: React.FC = () => {
  const { 
    user, 
    getUserFullName, 
    getUserRole, 
    getUserDistrict, 
    getUserManufacturer 
  } = useAuth();

  const district = getUserDistrict();
  const manufacturer = getUserManufacturer();

  return (
    <div className="p-4">
      <div className="grid">
        <div className="col-12 md:col-8 lg:col-6">
          <Card title="User Profile" className="mb-4">
            <div className="grid">
              <div className="col-12 md:col-6">
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <div className="text-lg">{getUserFullName() || 'Not provided'}</div>
                </div>
              </div>
              
              <div className="col-12 md:col-6">
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <div className="text-lg">{user?.username || 'Not provided'}</div>
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <div className="text-lg">{user?.email || 'Not provided'}</div>
                </div>
              </div>

              <div className="col-12 md:col-6">
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <div className="text-lg font-semibold text-primary">
                    {getUserRole() || 'No role assigned'}
                  </div>
                </div>
              </div>

              {district && (district.id || district.name) && (
                <div className="col-12 md:col-6">
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">School District</label>
                    <div className="text-lg">{district.name || `District ID: ${district.id}`}</div>
                  </div>
                </div>
              )}

              {manufacturer && (manufacturer.id || manufacturer.name) && (
                <div className="col-12 md:col-6">
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Manufacturer</label>
                    <div className="text-lg">{manufacturer.name || `Manufacturer ID: ${manufacturer.id}`}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <Button 
                label="Edit Profile" 
                icon="pi pi-pencil" 
                className="mr-2"
                onClick={() => console.log('Edit profile functionality coming soon')}
              />
              <Button 
                label="Change Password" 
                icon="pi pi-key" 
                className="p-button-outlined"
                onClick={() => console.log('Change password functionality coming soon')}
              />
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-4 lg:col-6">
          <Card title="Account Information" className="mb-4">
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Account ID</label>
              <div className="text-sm text-600">{user?.id || 'Not available'}</div>
            </div>

            {user?.apiUserData && (
              <>
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1">User ID</label>
                  <div className="text-sm text-600">{user.apiUserData.userId || 'Not available'}</div>
                </div>

                {user.apiUserData.createdOn && (
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Account Created</label>
                    <div className="text-sm text-600">
                      {new Date(user.apiUserData.createdOn).toLocaleDateString()}
                    </div>
                  </div>
                )}

                {user.apiUserData.updatedOn && (
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Last Modified</label>
                    <div className="text-sm text-600">
                      {new Date(user.apiUserData.updatedOn).toLocaleDateString()}
                    </div>
                  </div>
                )}
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};