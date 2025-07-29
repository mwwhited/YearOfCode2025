import React, { useState } from 'react';
import { 
  CategoryCombobox, 
  SubCategoryCombobox, 
  ManufacturerCombobox, 
  SchoolDistrictCombobox, 
  RoleCombobox, 
  StateCombobox, 
  StorageTypeCombobox, 
  AllergenCombobox,
  Panel,
  Button,
  Message
} from '@/components/controls';

export const ComboboxTest: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState({
    category: null as number | null,
    subCategory: null as number | null,
    manufacturer: null as number | null,
    schoolDistrict: null as number | null,
    role: null as number | null,
    state: null as number | null,
    storageType: null as number | null,
    allergen: null as number | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleError = (field: string) => (error: string) => {
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleValueChange = (field: keyof typeof selectedValues, value: number | null) => {
    setSelectedValues(prev => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const resetAll = () => {
    setSelectedValues({
      category: null,
      subCategory: null,
      manufacturer: null,
      schoolDistrict: null,
      role: null,
      state: null,
      storageType: null,
      allergen: null,
    });
    setErrors({});
  };

  const showSelectedValues = () => {
    const selectedCount = Object.values(selectedValues).filter(value => value !== null && value !== 0).length;
    if (selectedCount === 0) {
      alert('No values selected');
    } else {
      const selectedText = Object.entries(selectedValues)
        .filter(([, value]) => value !== null && value !== 0)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
      alert(`Selected Values (${selectedCount}):\n\n${selectedText}`);
    }
  };

  return (
    <div className="combobox-test p-4">
      <div className="mb-4 flex justify-content-between align-items-center">
        <div>
          <h1 className="text-2xl font-bold text-900 m-0">
            Combobox Controls Test
          </h1>
          <p className="text-600 mt-2">
            Test all dropdown controls with live data loading from API clients
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            label="Show Selected"
            icon="pi pi-eye"
            onClick={showSelectedValues}
            className="p-button-info"
          />
          <Button
            label="Reset All"
            icon="pi pi-refresh"
            onClick={resetAll}
            className="p-button-outlined"
          />
        </div>
      </div>

      {Object.keys(errors).filter(key => errors[key]).length > 0 && (
        <Message 
          severity="error" 
          text={`Loading errors: ${Object.keys(errors).filter(key => errors[key]).join(', ')}`}
          className="w-full mb-4" 
        />
      )}

      <div className="grid">
        {/* Category and SubCategory */}
        <div className="col-12 lg:col-6">
          <Panel header="Product Categories" className="mb-4">
            <div className="grid">
              <div className="col-12">
                <div className="field">
                  <label htmlFor="category" className="font-semibold">Category</label>
                  <CategoryCombobox
                    id="category"
                    value={selectedValues.category}
                    onChange={(e) => handleValueChange('category', e.value)}
                    onLoadError={handleError('category')}
                    className="w-full"
                    placeholder="Select a category..."
                  />
                  {errors.category && <small className="p-error">{errors.category}</small>}
                </div>
              </div>
              <div className="col-12">
                <div className="field">
                  <label htmlFor="subCategory" className="font-semibold">Sub Category</label>
                  <SubCategoryCombobox
                    id="subCategory"
                    value={selectedValues.subCategory}
                    onChange={(e) => handleValueChange('subCategory', e.value)}
                    onLoadError={handleError('subCategory')}
                    categoryId={selectedValues.category || undefined}
                    className="w-full"
                    placeholder="Select a sub category..."
                    disabled={!selectedValues.category}
                  />
                  {errors.subCategory && <small className="p-error">{errors.subCategory}</small>}
                  {!selectedValues.category && (
                    <small className="text-600">Select a category first to enable sub categories</small>
                  )}
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Business Entities */}
        <div className="col-12 lg:col-6">
          <Panel header="Business Entities" className="mb-4">
            <div className="grid">
              <div className="col-12">
                <div className="field">
                  <label htmlFor="manufacturer" className="font-semibold">Manufacturer</label>
                  <ManufacturerCombobox
                    id="manufacturer"
                    value={selectedValues.manufacturer}
                    onChange={(e) => handleValueChange('manufacturer', e.value)}
                    onLoadError={handleError('manufacturer')}
                    className="w-full"
                    placeholder="Select a manufacturer..."
                  />
                  {errors.manufacturer && <small className="p-error">{errors.manufacturer}</small>}
                </div>
              </div>
              <div className="col-12">
                <div className="field">
                  <label htmlFor="schoolDistrict" className="font-semibold">School District</label>
                  <SchoolDistrictCombobox
                    id="schoolDistrict"
                    value={selectedValues.schoolDistrict}
                    onChange={(e) => handleValueChange('schoolDistrict', e.value)}
                    onLoadError={handleError('schoolDistrict')}
                    className="w-full"
                    placeholder="Select a school district..."
                  />
                  {errors.schoolDistrict && <small className="p-error">{errors.schoolDistrict}</small>}
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* User Management */}
        <div className="col-12 lg:col-6">
          <Panel header="User Management" className="mb-4">
            <div className="grid">
              <div className="col-12">
                <div className="field">
                  <label htmlFor="role" className="font-semibold">Role</label>
                  <RoleCombobox
                    id="role"
                    value={selectedValues.role}
                    onChange={(e) => handleValueChange('role', e.value)}
                    onLoadError={handleError('role')}
                    className="w-full"
                    placeholder="Select a role..."
                  />
                  {errors.role && <small className="p-error">{errors.role}</small>}
                </div>
              </div>
              <div className="col-12">
                <div className="field">
                  <label htmlFor="state" className="font-semibold">State</label>
                  <StateCombobox
                    id="state"
                    value={selectedValues.state}
                    onChange={(e) => handleValueChange('state', e.value)}
                    onLoadError={handleError('state')}
                    className="w-full"
                    placeholder="Select a state..."
                  />
                  {errors.state && <small className="p-error">{errors.state}</small>}
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Product Configuration */}
        <div className="col-12 lg:col-6">
          <Panel header="Product Configuration" className="mb-4">
            <div className="grid">
              <div className="col-12">
                <div className="field">
                  <label htmlFor="storageType" className="font-semibold">Storage Type</label>
                  <StorageTypeCombobox
                    id="storageType"
                    value={selectedValues.storageType}
                    onChange={(e) => handleValueChange('storageType', e.value)}
                    onLoadError={handleError('storageType')}
                    className="w-full"
                    placeholder="Select a storage type..."
                  />
                  {errors.storageType && <small className="p-error">{errors.storageType}</small>}
                </div>
              </div>
              <div className="col-12">
                <div className="field">
                  <label htmlFor="allergen" className="font-semibold">Allergen</label>
                  <AllergenCombobox
                    id="allergen"
                    value={selectedValues.allergen}
                    onChange={(e) => handleValueChange('allergen', e.value)}
                    onLoadError={handleError('allergen')}
                    className="w-full"
                    placeholder="Select an allergen..."
                  />
                  {errors.allergen && <small className="p-error">{errors.allergen}</small>}
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </div>

      {/* Summary Panel */}
      <Panel header="Selection Summary" className="mt-4">
        <div className="grid">
          <div className="col-12 md:col-6">
            <h4 className="text-lg font-semibold text-900 mt-0">Current Selections:</h4>
            <ul className="pl-3">
              {Object.entries(selectedValues).map(([key, value]) => (
                <li key={key} className="mb-1">
                  <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>{' '}
                  <span className={value && value !== 0 ? 'text-primary font-semibold' : 'text-500'}>
                    {value && value !== 0 ? `ID ${value}` : 'None selected'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 md:col-6">
            <h4 className="text-lg font-semibold text-900 mt-0">Loading Status:</h4>
            <ul className="pl-3">
              {Object.keys(selectedValues).map((key) => (
                <li key={key} className="mb-1">
                  <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>{' '}
                  <span className={errors[key] ? 'text-red-600' : 'text-green-600'}>
                    {errors[key] ? 'Error loading' : 'Loaded successfully'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Panel>
    </div>
  );
};