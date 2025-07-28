import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card } from '@/components/controls';
import { UserRole } from '@/types/roles';

/**
 * Demo component showing how to access complete user data from the AuthContext
 * This demonstrates the new functionality where all user information from UserClient.Get()
 * is available throughout the application
 */
export const UserInfoDemo: React.FC = () => {
  const { 
    user, 
    isAuthenticated, 
    getUserFullName, 
    getUserRole, 
    getUserDistrict, 
    getUserManufacturer,
    hasRole,
    hasAnyRole
  } = useAuth();

  if (!isAuthenticated || !user?.apiUserData) {
    return (
      <Card title="User Information">
        <p>User not authenticated or data not loaded</p>
      </Card>
    );
  }

  const userData = user.apiUserData;
  const district = getUserDistrict();
  const manufacturer = getUserManufacturer();

  return (
    <Card title="Complete User Information">
      <div className="grid">
        <div className="col-12 md:col-6">
          <h4>Basic Information</h4>
          <ul>
            <li><strong>Full Name:</strong> {getUserFullName()}</li>
            <li><strong>Email:</strong> {userData.email}</li>
            <li><strong>Role:</strong> {getUserRole()}</li>
            <li><strong>User ID:</strong> {userData.userId}</li>
            <li><strong>Active:</strong> {userData.isActive ? 'Yes' : 'No'}</li>
          </ul>
        </div>
        
        <div className="col-12 md:col-6">
          <h4>Organization Details</h4>
          <ul>
            <li><strong>District:</strong> {district?.name || 'N/A'} {district?.id && `(ID: ${district.id})`}</li>
            <li><strong>Manufacturer:</strong> {manufacturer?.name || 'N/A'} {manufacturer?.id && `(ID: ${manufacturer.id})`}</li>
            <li><strong>State:</strong> {userData.state || 'N/A'}</li>
          </ul>
        </div>
        
        <div className="col-12">
          <h4>Address Information</h4>
          <ul>
            <li><strong>Address:</strong> {userData.addressLine1 || 'N/A'}</li>
            {userData.addressLine2 && <li><strong>Address 2:</strong> {userData.addressLine2}</li>}
            <li><strong>City:</strong> {userData.city || 'N/A'}</li>
            <li><strong>ZIP Code:</strong> {userData.zipCode || 'N/A'}</li>
            <li><strong>Country:</strong> {userData.country || 'N/A'}</li>
          </ul>
        </div>
        
        <div className="col-12">
          <h4>Permission Examples</h4>
          <ul>
            <li><strong>Can manage users:</strong> {hasRole(UserRole.DISTRICT_ADMIN) ? 'Yes' : 'No'}</li>
            <li><strong>Is admin:</strong> {hasAnyRole([UserRole.DISTRICT_ADMIN, UserRole.COOPERATIVE_ADMIN, UserRole.SUPER_ADMIN]) ? 'Yes' : 'No'}</li>
            <li><strong>Can access system settings:</strong> {hasRole(UserRole.SUPER_ADMIN) ? 'Yes' : 'No'}</li>
          </ul>
        </div>
        
        <div className="col-12">
          <h4>Audit Information</h4>
          <ul>
            <li><strong>Created On:</strong> {userData.createdOn ? new Date(userData.createdOn).toLocaleDateString() : 'N/A'}</li>
            <li><strong>Created By:</strong> {userData.createdBy || 'N/A'}</li>
            <li><strong>Updated On:</strong> {userData.updatedOn ? new Date(userData.updatedOn).toLocaleDateString() : 'N/A'}</li>
            <li><strong>Updated By:</strong> {userData.updatedBy || 'N/A'}</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};