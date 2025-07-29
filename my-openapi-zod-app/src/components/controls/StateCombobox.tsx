import React, { useState, useEffect } from 'react';
import { Dropdown } from './';
import StateClient from '@/api/GreenOnion/Clients/StateClient';
import type { DropdownProps } from 'primereact/dropdown';

interface StateOption {
  label: string;
  value: number;
}

interface StateComboboxProps extends Omit<DropdownProps, 'options' | 'optionLabel' | 'optionValue' | 'onError'> {
  includeEmpty?: boolean;
  emptyLabel?: string;
  onLoadError?: (error: string) => void;
}

export const StateCombobox: React.FC<StateComboboxProps> = ({
  includeEmpty = true,
  emptyLabel = 'Select State...',
  onLoadError,
  ...dropdownProps
}) => {
  const [options, setOptions] = useState<StateOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStates = async () => {
      try {
        setLoading(true);
        const client = new StateClient();
        const response = await client.Query({});
        
        if (response && response.rows) {
          const stateOptions: StateOption[] = response.rows
            .filter(state => state.stateName && state.stateId)
            .map(state => ({
              label: state.stateName!,
              value: state.stateId!
            }))
            .sort((a, b) => a.label.localeCompare(b.label));

          if (includeEmpty) {
            stateOptions.unshift({ label: emptyLabel, value: 0 });
          }

          setOptions(stateOptions);
        } else {
          setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load states';
        setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        if (onLoadError) {
          onLoadError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    loadStates();
  }, [includeEmpty, emptyLabel, onLoadError]);

  return (
    <Dropdown
      {...dropdownProps}
      options={options}
      optionLabel="label"
      optionValue="value"
      loading={loading}
      placeholder={loading ? 'Loading states...' : 'Select state...'}
    />
  );
};