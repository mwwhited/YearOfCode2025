/**
 * Edit User - Panel Form Approach
 * Uses structured panels with individual form controls
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Panel, 
  Button, 
  ProgressSpinner, 
  Message, 
  InputText, 
  Checkbox,
  Fieldset
} from '@/components/controls';
import UserClient from '@/api/GreenOnion/Clients/UserClient';
import type { IQueryUserModel, ISaveUserModel } from '@/api/GreenOnion';
import { logger } from '@/utils/logger';
import { applicationInsights } from '@/services/applicationInsights';

const EditUserPanel: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  
  // State management
  const [user, setUser] = useState<IQueryUserModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  // Form data state (only editable fields)
  const [formData, setFormData] = useState<ISaveUserModel>({
    userId: undefined,
    isActive: true,
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    profileImage: '',
    coverImage: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    zipCode: '',
    stateId: undefined,
    roleId: undefined,
    schoolDistrictId: undefined,
    manufacturerId: undefined,
  });

  // Validation errors
  const [errors, setErrors] = useState<Partial<Record<keyof ISaveUserModel, string>>>({});

  const userClient = new UserClient();

  // Load user data
  useEffect(() => {
    const loadUser = async () => {
      if (!userId) {
        setError('User ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const userData = await userClient.Get({ id: parseInt(userId) });
        
        if (userData) {
          setUser(userData);
          
          // Populate form with editable fields
          setFormData({
            userId: userData.userId,
            isActive: userData.isActive,
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            email: userData.email || '',
            mobile: userData.mobile || '',
            profileImage: userData.profileImage || '',
            coverImage: userData.coverImage || '',
            addressLine1: userData.addressLine1 || '',
            addressLine2: userData.addressLine2 || '',
            city: userData.city || '',
            country: userData.country || '',
            zipCode: userData.zipCode || '',
            stateId: userData.stateId,
            roleId: userData.roleId,
            schoolDistrictId: userData.schoolDistrictId,
            manufacturerId: userData.manufacturerId,
          });
          
          logger.info('User loaded for panel editing:', { userId: userData.userId, email: userData.email });
        } else {
          setError('User not found');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load user';
        setError(errorMessage);
        logger.error('Error loading user:', err);
        
        applicationInsights.trackException(
          err instanceof Error ? err : new Error(errorMessage),
          2,
          { context: 'edit_user_panel_load', userId }
        );
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ISaveUserModel, string>> = {};

    if (!formData.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form field changes
  const handleFieldChange = (field: keyof ISaveUserModel, value: string | number | boolean | null | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Handle form submission
  const handleSave = async () => {
    if (!validateForm()) {
      logger.warn('Panel form validation failed', errors);
      return;
    }

    try {
      setSaving(true);
      setError(null);
      setSuccess(false);

      logger.info('Saving user with panel form:', formData);

      const savedUser = await userClient.Save({ body: formData });
      
      if (savedUser) {
        setUser(savedUser);
        setSuccess(true);
        
        applicationInsights.trackEvent('UserSaved', {
          userId: savedUser.userId?.toString(),
          method: 'panel_form',
          fieldsModified: Object.keys(formData).filter(key => formData[key as keyof ISaveUserModel] !== null && formData[key as keyof ISaveUserModel] !== '').length.toString()
        });

        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save user';
      setError(errorMessage);
      logger.error('Error saving user:', err);
      
      applicationInsights.trackException(
        err instanceof Error ? err : new Error(errorMessage),
        2,
        { context: 'edit_user_panel_save', userId }
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex align-items-center justify-content-center">
        <div className="text-center">
          <ProgressSpinner style={{ width: '50px', height: '50px' }} />
          <div className="mt-3">
            <h3>Loading User...</h3>
            <p className="text-600">Please wait while we load the user data</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="p-4">
        <div className="max-w-30rem mx-auto">
          <Message severity="error" text={error} className="w-full mb-3" />
          <div className="text-center">
            <Button 
              label="Back to Users" 
              icon="pi pi-arrow-left"
              onClick={() => navigate('/users')}
              className="p-button-outlined"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex align-items-center justify-content-between">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            Edit User - Panel Form
          </h1>
          <p className="text-600">
            Editing: {user?.firstName} {user?.lastName} ({user?.email})
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            label="Dynamic Form"
            icon="pi pi-cog"
            onClick={() => navigate(`/users/${userId}/edit-dynamic`)}
            className="p-button-outlined p-button-secondary"
          />
          <Button
            label="Back to Users"
            icon="pi pi-arrow-left"
            onClick={() => navigate('/users')}
            className="p-button-outlined"
          />
        </div>
      </div>

      {success && (
        <Message 
          severity="success" 
          text="User saved successfully!" 
          className="w-full mb-3" 
        />
      )}

      {error && (
        <Message 
          severity="error" 
          text={error} 
          className="w-full mb-3" 
        />
      )}

      <div className="grid">
        {/* Editable Fields */}
        <div className="col-12 xl:col-8">
          <Panel header="User Information" className="mb-4">
            <div className="grid">
              {/* Basic Information */}
              <div className="col-12">
                <Fieldset legend="Basic Information" className="mb-4">
                  <div className="grid">
                    <div className="col-12 md:col-6">
                      <div className="field">
                        <label htmlFor="firstName" className="font-semibold">
                          First Name <span className="text-red-600">*</span>
                        </label>
                        <InputText
                          id="firstName"
                          value={formData.firstName || ''}
                          onChange={(e) => handleFieldChange('firstName', e.target.value)}
                          className={errors.firstName ? 'p-invalid w-full' : 'w-full'}
                          placeholder="Enter first name"
                        />
                        {errors.firstName && <small className="p-error">{errors.firstName}</small>}
                      </div>
                    </div>

                    <div className="col-12 md:col-6">
                      <div className="field">
                        <label htmlFor="lastName" className="font-semibold">
                          Last Name <span className="text-red-600">*</span>
                        </label>
                        <InputText
                          id="lastName"
                          value={formData.lastName || ''}
                          onChange={(e) => handleFieldChange('lastName', e.target.value)}
                          className={errors.lastName ? 'p-invalid w-full' : 'w-full'}
                          placeholder="Enter last name"
                        />
                        {errors.lastName && <small className="p-error">{errors.lastName}</small>}
                      </div>
                    </div>

                    <div className="col-12 md:col-6">
                      <div className="field">
                        <label htmlFor="email" className="font-semibold">
                          Email Address <span className="text-red-600">*</span>
                        </label>
                        <InputText
                          id="email"
                          type="email"
                          value={formData.email || ''}
                          onChange={(e) => handleFieldChange('email', e.target.value)}
                          className={errors.email ? 'p-invalid w-full' : 'w-full'}
                          placeholder="Enter email address"
                        />
                        {errors.email && <small className="p-error">{errors.email}</small>}
                      </div>
                    </div>

                    <div className="col-12 md:col-6">
                      <div className="field">
                        <label htmlFor="mobile" className="font-semibold">Mobile Phone</label>
                        <InputText
                          id="mobile"
                          value={formData.mobile || ''}
                          onChange={(e) => handleFieldChange('mobile', e.target.value)}
                          className="w-full"
                          placeholder="Enter mobile number"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="field">
                        <div className="flex align-items-center">
                          <Checkbox
                            id="isActive"
                            checked={!!formData.isActive}
                            onChange={(e) => handleFieldChange('isActive', e.checked)}
                          />
                          <label htmlFor="isActive" className="ml-2 font-semibold">
                            Active User
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fieldset>
              </div>

              {/* Address Information */}
              <div className="col-12">
                <Fieldset legend="Address Information" className="mb-4">
                  <div className="grid">
                    <div className="col-12">
                      <div className="field">
                        <label htmlFor="addressLine1" className="font-semibold">Address Line 1</label>
                        <InputText
                          id="addressLine1"
                          value={formData.addressLine1 || ''}
                          onChange={(e) => handleFieldChange('addressLine1', e.target.value)}
                          className="w-full"
                          placeholder="Enter street address"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="field">
                        <label htmlFor="addressLine2" className="font-semibold">Address Line 2</label>
                        <InputText
                          id="addressLine2"
                          value={formData.addressLine2 || ''}
                          onChange={(e) => handleFieldChange('addressLine2', e.target.value)}
                          className="w-full"
                          placeholder="Enter apartment, suite, etc."
                        />
                      </div>
                    </div>

                    <div className="col-12 md:col-4">
                      <div className="field">
                        <label htmlFor="city" className="font-semibold">City</label>
                        <InputText
                          id="city"
                          value={formData.city || ''}
                          onChange={(e) => handleFieldChange('city', e.target.value)}
                          className="w-full"
                          placeholder="Enter city"
                        />
                      </div>
                    </div>

                    <div className="col-12 md:col-4">
                      <div className="field">
                        <label htmlFor="zipCode" className="font-semibold">ZIP Code</label>
                        <InputText
                          id="zipCode"
                          value={formData.zipCode || ''}
                          onChange={(e) => handleFieldChange('zipCode', e.target.value)}
                          className="w-full"
                          placeholder="Enter ZIP code"
                        />
                      </div>
                    </div>

                    <div className="col-12 md:col-4">
                      <div className="field">
                        <label htmlFor="country" className="font-semibold">Country</label>
                        <InputText
                          id="country"
                          value={formData.country || ''}
                          onChange={(e) => handleFieldChange('country', e.target.value)}
                          className="w-full"
                          placeholder="Enter country"
                        />
                      </div>
                    </div>
                  </div>
                </Fieldset>
              </div>

              {/* Profile Images */}
              <div className="col-12">
                <Fieldset legend="Profile Images" className="mb-4">
                  <div className="grid">
                    <div className="col-12 md:col-6">
                      <div className="field">
                        <label htmlFor="profileImage" className="font-semibold">Profile Image URL</label>
                        <InputText
                          id="profileImage"
                          value={formData.profileImage || ''}
                          onChange={(e) => handleFieldChange('profileImage', e.target.value)}
                          className="w-full"
                          placeholder="Enter profile image URL"
                        />
                      </div>
                    </div>

                    <div className="col-12 md:col-6">
                      <div className="field">
                        <label htmlFor="coverImage" className="font-semibold">Cover Image URL</label>
                        <InputText
                          id="coverImage"
                          value={formData.coverImage || ''}
                          onChange={(e) => handleFieldChange('coverImage', e.target.value)}
                          className="w-full"
                          placeholder="Enter cover image URL"
                        />
                      </div>
                    </div>
                  </div>
                </Fieldset>
              </div>

              {/* Save Button */}
              <div className="col-12">
                <div className="pt-3 border-top-1 surface-border">
                  <Button
                    label={saving ? 'Saving...' : 'Save Changes'}
                    icon="pi pi-save"
                    onClick={handleSave}
                    loading={saving}
                    className="p-button-primary"
                  />
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Readonly Information */}
        <div className="col-12 xl:col-4">
          <Panel header="Readonly Information" className="mb-4">
            <div className="field-group">
              <div className="field">
                <label className="font-semibold">User ID:</label>
                <p className="text-600 mt-1">{user?.userId || 'N/A'}</p>
              </div>
              
              <div className="field">
                <label className="font-semibold">Object ID:</label>
                <p className="text-600 mt-1">{user?.objectId || 'N/A'}</p>
              </div>
              
              <div className="field">
                <label className="font-semibold">Role:</label>
                <p className="text-600 mt-1">{user?.roleName || 'N/A'}</p>
              </div>
              
              <div className="field">
                <label className="font-semibold">School District:</label>
                <p className="text-600 mt-1">{user?.schoolDistrictName || 'N/A'}</p>
              </div>
              
              <div className="field">
                <label className="font-semibold">Manufacturer:</label>
                <p className="text-600 mt-1">{user?.manufacturerName || 'N/A'}</p>
              </div>
              
              <div className="field">
                <label className="font-semibold">State:</label>
                <p className="text-600 mt-1">{user?.state || 'N/A'}</p>
              </div>
              
              <div className="field">
                <label className="font-semibold">Created On:</label>
                <p className="text-600 mt-1">
                  {user?.createdOn ? new Date(user.createdOn).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              
              <div className="field">
                <label className="font-semibold">Created By:</label>
                <p className="text-600 mt-1">{user?.createdBy || 'N/A'}</p>
              </div>
              
              <div className="field">
                <label className="font-semibold">Last Updated:</label>
                <p className="text-600 mt-1">
                  {user?.updatedOn ? new Date(user.updatedOn).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              
              <div className="field">
                <label className="font-semibold">Updated By:</label>
                <p className="text-600 mt-1">{user?.updatedBy || 'N/A'}</p>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default EditUserPanel;