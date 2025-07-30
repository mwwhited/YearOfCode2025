import React, { useState, useEffect } from 'react';
import { Dropdown } from './';
import StorageTypeClient from '@/api/GreenOnion/Clients/StorageTypeClient';
import type { DropdownProps } from 'primereact/dropdown';

interface StorageTypeOption {
  label: string;
  value: number;
}

interface StorageTypeComboboxProps extends Omit<DropdownProps, 'options' | 'optionLabel' | 'optionValue' | 'onError'> {
  includeEmpty?: boolean;
  emptyLabel?: string;
  onLoadError?: (error: string) => void;
}

export const StorageTypeCombobox: React.FC<StorageTypeComboboxProps> = ({
  includeEmpty = true,
  emptyLabel = 'Select Storage Type...',
  onLoadError,
  ...dropdownProps
}) => {
  const [options, setOptions] = useState<StorageTypeOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStorageTypes = async () => {
      try {
        setLoading(true);
        const client = new StorageTypeClient();
        const response = await client.Query({});
        
        if (response && response.rows) {
          const storageTypeOptions: StorageTypeOption[] = (response.rows as any[])
            .filter((storageType: any) => storageType.storageTypeName && storageType.storageTypeId)
            .map((storageType: any) => ({
              label: storageType.storageTypeName!,
              value: storageType.storageTypeId!
            }))
            .sort((a: StorageTypeOption, b: StorageTypeOption) => a.label.localeCompare(b.label));

          if (includeEmpty) {
            storageTypeOptions.unshift({ label: emptyLabel, value: 0 });
          }

          setOptions(storageTypeOptions);
        } else {
          setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load storage types';
        setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        if (onLoadError) {
          onLoadError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    loadStorageTypes();
  }, [includeEmpty, emptyLabel, onLoadError]);

  return (
    <Dropdown
      {...dropdownProps}
      options={options}
      optionLabel="label"
      optionValue="value"
      loading={loading}
      placeholder={loading ? 'Loading storage types...' : 'Select storage type...'}
    />
  );
};