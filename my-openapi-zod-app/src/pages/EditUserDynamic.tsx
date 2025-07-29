/**
 * Edit User - Dynamic Form Approach
 * Uses dynamic form generation based on SaveUserModel schema
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Panel, Button, ProgressSpinner, Message } from '@/components/controls';
import { DynamicForm } from '@/components/forms/DynamicForm';
import UserClient from '@/api/GreenOnion/Clients/UserClient';
import type { IQueryUserModel, ISaveUserModel } from '@/api/GreenOnion';
import ZSaveUserModel from '@/api/GreenOnion/Schema/ZSaveUserModel';
import { logger } from '@/utils/logger';
import { applicationInsights } from '@/services/applicationInsights';

const EditUserDynamic: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<IQueryUserModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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
          logger.info('User loaded for editing:', { userId: userData.userId, email: userData.email });
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
          { context: 'edit_user_dynamic_load', userId }
        );
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  // Handle form submission
  const handleSave = async (formData: ISaveUserModel) => {
    try {
      setSaving(true);
      setError(null);
      setSuccess(false);

      // Ensure userId is included
      const saveData: ISaveUserModel = {
        ...formData,
        userId: user?.userId || undefined
      };

      logger.info('Saving user with dynamic form:', saveData);

      const savedUser = await userClient.Save({ body: saveData });
      
      if (savedUser) {
        setUser(savedUser);
        setSuccess(true);
        
        applicationInsights.trackEvent('UserSaved', {
          userId: savedUser.userId?.toString(),
          method: 'dynamic_form',
          fieldsModified: Object.keys(formData).length.toString()
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
        { context: 'edit_user_dynamic_save', userId }
      );
    } finally {
      setSaving(false);
    }
  };

  // Define form configuration
  const formConfig = {
    schema: ZSaveUserModel,
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text' as const,
        required: true,
        placeholder: 'Enter first name'
      },
      {
        name: 'lastName',
        label: 'Last Name', 
        type: 'text' as const,
        required: true,
        placeholder: 'Enter last name'
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email' as const,
        required: true,
        placeholder: 'Enter email address'
      },
      {
        name: 'mobile',
        label: 'Mobile Phone',
        type: 'text' as const,
        placeholder: 'Enter mobile number'
      },
      {
        name: 'isActive',
        label: 'Active Status',
        type: 'boolean' as const,
        defaultValue: true
      },
      {
        name: 'addressLine1',
        label: 'Address Line 1',
        type: 'text' as const,
        placeholder: 'Enter street address'
      },
      {
        name: 'addressLine2',
        label: 'Address Line 2',
        type: 'text' as const,
        placeholder: 'Enter apartment, suite, etc.'
      },
      {
        name: 'city',
        label: 'City',
        type: 'text' as const,
        placeholder: 'Enter city'
      },
      {
        name: 'zipCode',
        label: 'ZIP Code',
        type: 'text' as const,
        placeholder: 'Enter ZIP code'
      },
      {
        name: 'country',
        label: 'Country',
        type: 'text' as const,
        placeholder: 'Enter country'
      },
      {
        name: 'profileImage',
        label: 'Profile Image URL',
        type: 'text' as const,
        placeholder: 'Enter profile image URL'
      },
      {
        name: 'coverImage',
        label: 'Cover Image URL',
        type: 'text' as const,
        placeholder: 'Enter cover image URL'
      }
    ]
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
        <div className="max-w-md mx-auto">
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
            Edit User - Dynamic Form
          </h1>
          <p className="text-600">
            Editing: {user?.firstName} {user?.lastName} ({user?.email})
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            label="Panel Form"
            icon="pi pi-list"
            onClick={() => navigate(`/users/${userId}/edit-panel`)}
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
        <div className="col-12 xl:col-8">
          <Panel header="Editable Fields (Dynamic Form)" className="mb-4">
            {user && (
              <DynamicForm
                config={formConfig}
                initialData={user}
                onSubmit={handleSave}
                loading={saving}
                submitLabel={saving ? 'Saving...' : 'Save Changes'}
                submitIcon="pi pi-save"
              />
            )}
          </Panel>
        </div>

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

export default EditUserDynamic;