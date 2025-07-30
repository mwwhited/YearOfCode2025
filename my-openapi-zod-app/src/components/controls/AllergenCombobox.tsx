import React, { useState, useEffect } from 'react';
import { Dropdown } from './';
import AllergenClient from '@/api/GreenOnion/Clients/AllergenClient';
import type { DropdownProps } from 'primereact/dropdown';

interface AllergenOption {
  label: string;
  value: number;
}

interface AllergenComboboxProps extends Omit<DropdownProps, 'options' | 'optionLabel' | 'optionValue' | 'onError'> {
  includeEmpty?: boolean;
  emptyLabel?: string;
  onLoadError?: (error: string) => void;
}

export const AllergenCombobox: React.FC<AllergenComboboxProps> = ({
  includeEmpty = true,
  emptyLabel = 'Select Allergen...',
  onLoadError,
  ...dropdownProps
}) => {
  const [options, setOptions] = useState<AllergenOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAllergens = async () => {
      try {
        setLoading(true);
        const client = new AllergenClient();
        const response = await client.Query({});
        
        if (response && response.rows) {
          const allergenOptions: AllergenOption[] = (response.rows as any[])
            .filter((allergen: any) => allergen.allergenName && allergen.allergenId)
            .map((allergen: any) => ({
              label: allergen.allergenName!,
              value: allergen.allergenId!
            }))
            .sort((a: AllergenOption, b: AllergenOption) => a.label.localeCompare(b.label));

          if (includeEmpty) {
            allergenOptions.unshift({ label: emptyLabel, value: 0 });
          }

          setOptions(allergenOptions);
        } else {
          setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load allergens';
        setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        if (onLoadError) {
          onLoadError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    loadAllergens();
  }, [includeEmpty, emptyLabel, onLoadError]);

  return (
    <Dropdown
      {...dropdownProps}
      options={options}
      optionLabel="label"
      optionValue="value"
      loading={loading}
      placeholder={loading ? 'Loading allergens...' : 'Select allergen...'}
    />
  );
};