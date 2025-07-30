/**
 * User Profile Page
 * Displays user information and allows profile management
 */

import React from 'react';
import { Card, Button, ProgressSpinner } from '@/components/controls';
import { useAuth } from '@/hooks/useAuth';

export const Profile: React.FC = () => {
  const { 
    user, 
    getUserFullName, 
    getUserRole, 
    getUserDistrict, 
    getUserManufacturer,
    isLoading,
    error
  } = useAuth();

  const district = getUserDistrict();
  const manufacturer = getUserManufacturer();

  // Show loading state
  if (isLoading) {
    return (
      <div className="p-4">
        <Card title="Loading Profile" className="text-center">
          <ProgressSpinner style={{ width: '50px', height: '50px' }} />
          <p className="mt-3">Loading your profile information...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4">
      {error && (
        <div className="col-12 mb-3">
          <div className="p-3 bg-yellow-100 text-yellow-800 border border-yellow-200 border-round">
            <i className="pi pi-exclamation-triangle mr-2"></i>
            Profile loading issue: {error}. Your information may be partially available.
          </div>
        </div>
      )}
      
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
                  <div className="text-sm text-600">{(user.apiUserData.userId as any) || 'Not available'}</div>
                </div>

                {user.apiUserData.createdOn && (
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Account Created</label>
                    <div className="text-sm text-600">
                      {new Date(user.apiUserData.createdOn as any).toLocaleDateString()}
                    </div>
                  </div>
                )}

                {user.apiUserData.updatedOn && (
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Last Modified</label>
                    <div className="text-sm text-600">
                      {new Date(user.apiUserData.updatedOn as any).toLocaleDateString()}
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