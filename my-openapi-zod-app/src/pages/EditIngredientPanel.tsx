import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Card, 
  Panel, 
  Button, 
  InputText, 
  InputTextarea,
  Checkbox,
  ProgressSpinner,
  Divider,
  AllergenCombobox
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
    description: '',
    nutritionalInfo: '',
    isOrganic: false,
    isGMOFree: false
  });

  // Validation
  const {
    errors,
    touched,
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
        const response = await client.Get({ ingredientId: parseInt(id) });
        if (response) {
          setFormData({
            ingredientId: response.ingredientId,
            ingredientName: response.ingredientName || '',
            description: response.description || '',
            allergenId: response.allergenId,
            isOrganic: response.isOrganic || false,
            isGMOFree: response.isGMOFree || false,
            nutritionalInfo: response.nutritionalInfo || ''
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
        await client.Update({ body: { ...formData, ingredientId: parseInt(id) } });
        logger.info('Ingredient updated successfully');
      } else {
        await client.Create({ body: formData });
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
                  value={formData.ingredientName}
                  onChange={(e) => handleFieldChange('ingredientName', e.target.value)}
                  onBlur={() => setFieldTouched('ingredientName', true)}
                  className={`w-full ${hasFieldError('ingredientName') ? 'p-invalid' : ''}`}
                  placeholder="Enter ingredient name"
                />
                {getFieldError('ingredientName') && (
                  <small className="p-error">{getFieldError('ingredientName')}</small>
                )}
              </div>

              <div className="field col-12">
                <label htmlFor="description">Description</label>
                <InputTextarea
                  id="description"
                  value={formData.description || ''}
                  onChange={(e) => handleFieldChange('description', e.target.value)}
                  onBlur={() => setFieldTouched('description', true)}
                  className={`w-full ${hasFieldError('description') ? 'p-invalid' : ''}`}
                  rows={3}
                  placeholder="Enter description"
                />
                {getFieldError('description') && (
                  <small className="p-error">{getFieldError('description')}</small>
                )}
              </div>

              <div className="field col-12 md:col-6">
                <label htmlFor="allergenId">Associated Allergen</label>
                <AllergenCombobox
                  value={formData.allergenId}
                  onChange={(value) => handleFieldChange('allergenId', value)}
                  placeholder="Select allergen (optional)"
                  showClear
                />
              </div>
            </div>
          </Panel>

          <Panel header="Nutritional Information" className="mb-3">
            <div className="formgrid grid">
              <div className="field col-12">
                <label htmlFor="nutritionalInfo">Nutritional Details</label>
                <InputTextarea
                  id="nutritionalInfo"
                  value={formData.nutritionalInfo || ''}
                  onChange={(e) => handleFieldChange('nutritionalInfo', e.target.value)}
                  onBlur={() => setFieldTouched('nutritionalInfo', true)}
                  className={`w-full ${hasFieldError('nutritionalInfo') ? 'p-invalid' : ''}`}
                  rows={5}
                  placeholder="Enter nutritional information"
                />
                {getFieldError('nutritionalInfo') && (
                  <small className="p-error">{getFieldError('nutritionalInfo')}</small>
                )}
              </div>
            </div>
          </Panel>

          <Panel header="Attributes" className="mb-3">
            <div className="formgrid grid">
              <div className="field col-12 md:col-6">
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="isOrganic"
                    checked={formData.isOrganic || false}
                    onChange={(e) => handleFieldChange('isOrganic', e.checked)}
                  />
                  <label htmlFor="isOrganic" className="ml-2">Organic</label>
                </div>
              </div>

              <div className="field col-12 md:col-6">
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="isGMOFree"
                    checked={formData.isGMOFree || false}
                    onChange={(e) => handleFieldChange('isGMOFree', e.checked)}
                  />
                  <label htmlFor="isGMOFree" className="ml-2">GMO Free</label>
                </div>
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