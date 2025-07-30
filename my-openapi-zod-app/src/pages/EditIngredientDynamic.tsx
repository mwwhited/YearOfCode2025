import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, ProgressSpinner } from '@/components/controls';
import { DynamicForm, type FormConfig } from '@/components/forms/DynamicForm';
import { ZSaveIngredientModel } from '@/api/GreenOnion/Schema';
import IngredientClient from '@/api/GreenOnion/Clients/IngredientClient';
import type { ISaveIngredientModel } from '@/api/GreenOnion/Models';
import { logger } from '@/utils/logger';
import { useGlobalToast } from '@/contexts/ToastContext';
import { auditLogger } from '@/utils/auditLogger';

export const EditIngredientDynamic: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState<ISaveIngredientModel | null>(null);
  const [client] = useState(() => new IngredientClient());
  const toast = useGlobalToast();
  
  const isEditMode = id && id !== 'new';

  // Form configuration based on schema
  const formConfig: FormConfig = {
    schema: ZSaveIngredientModel,
    fields: [
      {
        name: 'ingredientName',
        label: 'Ingredient Name',
        type: 'text',
        required: true,
        placeholder: 'Enter ingredient name'
      },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Enter description',
        rows: 3
      },
      {
        name: 'nutritionalInfo',
        label: 'Nutritional Information',
        type: 'textarea',
        placeholder: 'Enter nutritional information',
        rows: 4
      },
      {
        name: 'isOrganic',
        label: 'Organic',
        type: 'boolean',
        defaultValue: false
      },
      {
        name: 'isGMOFree',
        label: 'GMO Free',
        type: 'boolean',
        defaultValue: false
      }
    ]
  };

  // Load ingredient data if editing
  useEffect(() => {
    // Log page view
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'EditIngredientDynamic',
      entityId: isEditMode ? id : undefined,
      details: { page: 'edit-ingredient-dynamic', isEditMode }
    });

    const loadIngredient = async () => {
      if (!isEditMode) return;
      
      setLoading(true);
      try {
        const response = await client.Get({ id: parseInt(id) } as any);
        if (response) {
          // Log successful data retrieval
          await auditLogger.logSuccess({
            action: 'READ',
            entityType: 'Ingredient',
            entityId: id,
            details: { action: 'load-for-edit', ingredientName: response.ingredientName }
          });

          const ingredientData: ISaveIngredientModel = {
            ingredientId: response.ingredientId,
            ingredientName: response.ingredientName || '',
            group: response.group || '',
            iocGroup: response.iocGroup || ''
          };
          setInitialData(ingredientData);
        } else {
          await auditLogger.logError({
            action: 'READ',
            entityType: 'Ingredient',
            entityId: id,
            details: { action: 'load-for-edit' }
          }, 'Failed to load ingredient - no response');
        }
      } catch (error) {
        await auditLogger.logError({
          action: 'READ',
          entityType: 'Ingredient',
          entityId: id,
          details: { action: 'load-for-edit' }
        }, error as Error);
        
        logger.error('Failed to load ingredient:', error);
        toast.showError('Load Failed', 'Failed to load ingredient data');
        navigate('/ingredients');
      } finally {
        setLoading(false);
      }
    };

    loadIngredient();
  }, [id, isEditMode, client, navigate, toast]);

  const handleSubmit = async (data: Record<string, string | number | boolean | null | undefined>) => {
    const action = isEditMode ? 'UPDATE' : 'CREATE';
    const entityId = isEditMode ? id : undefined;
    
    setLoading(true);
    try {
      const ingredientData = data as ISaveIngredientModel;
      
      if (isEditMode) {
        ingredientData.ingredientId = parseInt(id);
        await (client as any).Update({ body: ingredientData });
        
        // Log successful update
        await auditLogger.logSuccess({
          action: 'UPDATE',
          entityType: 'Ingredient',
          entityId: id,
          details: { 
            ingredientName: ingredientData.ingredientName,
            formType: 'dynamic',
            changes: Object.keys(data).filter(key => 
              initialData && data[key] !== (initialData as any)[key]
            )
          }
        });
        
        logger.info('Ingredient updated successfully');
        toast.showSuccess('Update Successful', 'Ingredient has been updated successfully');
      } else {
        const response = await (client as any).Create({ body: ingredientData });
        
        // Log successful creation
        await auditLogger.logSuccess({
          action: 'CREATE',
          entityType: 'Ingredient',
          entityId: response?.ingredientId?.toString(),
          details: { 
            ingredientName: ingredientData.ingredientName,
            formType: 'dynamic'
          }
        });
        
        logger.info('Ingredient created successfully');
        toast.showSuccess('Create Successful', 'Ingredient has been created successfully');
      }
      
      navigate('/ingredients');
    } catch (error) {
      // Log failed save
      await auditLogger.logError({
        action,
        entityType: 'Ingredient',
        entityId,
        details: { 
          ingredientName: (data as ISaveIngredientModel).ingredientName,
          formType: 'dynamic' 
        }
      }, error as Error);
      
      logger.error('Failed to save ingredient:', error);
      toast.showError('Save Failed', 'Failed to save ingredient. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/ingredients');
  };

  if (loading && isEditMode) {
    return (
      <div className="flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-primary">
          {isEditMode ? 'Edit Ingredient' : 'Add Ingredient'}
        </h1>
      </div>

      <Card>
        <DynamicForm
          config={formConfig}
          initialData={initialData || {}}
          onSubmit={handleSubmit}
          loading={loading}
          submitLabel={isEditMode ? 'Update' : 'Create'}
          submitIcon="pi pi-check"
        />
        
        <div className="mt-3">
          <Button
            label="Cancel"
            icon="pi pi-times"
            severity="secondary"
            onClick={handleCancel}
            disabled={loading}
          />
        </div>
      </Card>
    </div>
  );
};