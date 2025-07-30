import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Card, 
  Panel, 
  Button, 
  InputText, 
  ProgressSpinner
} from '@/components/controls';
import type { ISaveIngredientModel } from '@/api/GreenOnion/Models';
import IngredientClient from '@/api/GreenOnion/Clients/IngredientClient';
import { logger } from '@/utils/logger';
import { ingredientValidationSchema } from '@/utils/formValidation';
import { useValidation } from '@/hooks/useValidation';

export const EditIngredientPanel: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [client] = useState(() => new IngredientClient());
  
  const isEditMode = id && id !== 'new';
  
  // Form state
  const [formData, setFormData] = useState<ISaveIngredientModel>({
    ingredientName: '',
    group: '',
    iocGroup: ''
  });

  // Validation
  const {
    // errors,
    // touched,
    validate,
    validateField,
    setFieldTouched,
    getFieldError,
    hasFieldError
  } = useValidation(ingredientValidationSchema);

  // Load ingredient data if editing
  useEffect(() => {
    const loadIngredient = async () => {
      if (!isEditMode) return;
      
      setLoading(true);
      try {
        const response = await client.Get({ id: parseInt(id) } as any);
        if (response) {
          setFormData({
            ingredientId: response.ingredientId,
            ingredientName: response.ingredientName || '',
            group: response.group || '',
            iocGroup: response.iocGroup || ''
          });
        }
      } catch (error) {
        logger.error('Failed to load ingredient:', error);
        alert('Failed to load ingredient data');
        navigate('/ingredients');
      } finally {
        setLoading(false);
      }
    };

    loadIngredient();
  }, [id, isEditMode, client, navigate]);

  const handleFieldChange = (field: keyof ISaveIngredientModel, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const handleSubmit = async () => {
    const validationResult = validate(formData);
    
    if (!validationResult.success) {
      logger.warn('Validation failed:', validationResult.errors);
      return;
    }
    
    setSaving(true);
    try {
      if (isEditMode) {
        await (client as any).Update({ body: { ...formData, ingredientId: parseInt(id) } });
        logger.info('Ingredient updated successfully');
      } else {
        await (client as any).Create({ body: formData });
        logger.info('Ingredient created successfully');
      }
      
      navigate('/ingredients');
    } catch (error) {
      logger.error('Failed to save ingredient:', error);
      alert('Failed to save ingredient. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
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

      <div className="grid">
        <div className="col-12 lg:col-8">
          <Panel header="Basic Information" className="mb-3">
            <div className="formgrid grid">
              <div className="field col-12">
                <label htmlFor="ingredientName">
                  Ingredient Name <span className="text-red-600">*</span>
                </label>
                <InputText
                  id="ingredientName"
                  value={String(formData.ingredientName || '')}
                  onChange={(e: any) => handleFieldChange('ingredientName', e.target.value)}
                  onBlur={() => setFieldTouched('ingredientName', true)}
                  className={`w-full ${hasFieldError('ingredientName') ? 'p-invalid' : ''}`}
                  placeholder="Enter ingredient name"
                />
                {getFieldError('ingredientName') && (
                  <small className="p-error">{getFieldError('ingredientName')}</small>
                )}
              </div>

              <div className="field col-12 md:col-6">
                <label htmlFor="group">Group</label>
                <InputText
                  id="group"
                  value={String(formData.group || '')}
                  onChange={(e: any) => handleFieldChange('group', e.target.value)}
                  onBlur={() => setFieldTouched('group', true)}
                  className={`w-full ${hasFieldError('group') ? 'p-invalid' : ''}`}
                  placeholder="Enter group"
                />
                {getFieldError('group') && (
                  <small className="p-error">{getFieldError('group')}</small>
                )}
              </div>

              <div className="field col-12 md:col-6">
                <label htmlFor="iocGroup">IOC Group</label>
                <InputText
                  id="iocGroup"
                  value={String(formData.iocGroup || '')}
                  onChange={(e: any) => handleFieldChange('iocGroup', e.target.value)}
                  onBlur={() => setFieldTouched('iocGroup', true)}
                  className={`w-full ${hasFieldError('iocGroup') ? 'p-invalid' : ''}`}
                  placeholder="Enter IOC group"
                />
                {getFieldError('iocGroup') && (
                  <small className="p-error">{getFieldError('iocGroup')}</small>
                )}
              </div>
            </div>
          </Panel>


        </div>

        <div className="col-12 lg:col-4">
          <Card title="Actions">
            <div className="flex flex-column gap-2">
              <Button
                label={isEditMode ? 'Update Ingredient' : 'Create Ingredient'}
                icon="pi pi-check"
                onClick={handleSubmit}
                disabled={saving}
                loading={saving}
              />
              <Button
                label="Cancel"
                icon="pi pi-times"
                severity="secondary"
                onClick={() => navigate('/ingredients')}
                disabled={saving}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};