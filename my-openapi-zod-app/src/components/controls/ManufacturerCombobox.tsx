import React, { useState, useEffect } from 'react';
import { Dropdown } from './';
import ManufacturerClient from '@/api/GreenOnion/Clients/ManufacturerClient';
import type { DropdownProps } from 'primereact/dropdown';

interface ManufacturerOption {
  label: string;
  value: number;
}

interface ManufacturerComboboxProps extends Omit<DropdownProps, 'options' | 'optionLabel' | 'optionValue' | 'onError'> {
  includeEmpty?: boolean;
  emptyLabel?: string;
  onLoadError?: (error: string) => void;
}

export const ManufacturerCombobox: React.FC<ManufacturerComboboxProps> = ({
  includeEmpty = true,
  emptyLabel = 'Select Manufacturer...',
  onLoadError,
  ...dropdownProps
}) => {
  const [options, setOptions] = useState<ManufacturerOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadManufacturers = async () => {
      try {
        setLoading(true);
        const client = new ManufacturerClient();
        const response = await client.Query({});
        
        if (response && response.rows) {
          const manufacturerOptions: ManufacturerOption[] = response.rows
            .filter(manufacturer => manufacturer.manufacturerName && manufacturer.manufacturerId)
            .map(manufacturer => ({
              label: manufacturer.manufacturerName!,
              value: manufacturer.manufacturerId!
            }))
            .sort((a, b) => a.label.localeCompare(b.label));

          if (includeEmpty) {
            manufacturerOptions.unshift({ label: emptyLabel, value: 0 });
          }

          setOptions(manufacturerOptions);
        } else {
          setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load manufacturers';
        setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        if (onLoadError) {
          onLoadError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    loadManufacturers();
  }, [includeEmpty, emptyLabel, onLoadError]);

  return (
    <Dropdown
      {...dropdownProps}
      options={options}
      optionLabel="label"
      optionValue="value"
      loading={loading}
      placeholder={loading ? 'Loading manufacturers...' : 'Select manufacturer...'}
    />
  );
};