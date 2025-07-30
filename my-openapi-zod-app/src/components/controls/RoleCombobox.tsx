import React, { useState, useEffect } from 'react';
import { Dropdown } from './';
import RoleClient from '@/api/GreenOnion/Clients/RoleClient';
import type { DropdownProps } from 'primereact/dropdown';

interface RoleOption {
  label: string;
  value: number;
}

interface RoleComboboxProps extends Omit<DropdownProps, 'options' | 'optionLabel' | 'optionValue' | 'onError'> {
  includeEmpty?: boolean;
  emptyLabel?: string;
  onLoadError?: (error: string) => void;
}

export const RoleCombobox: React.FC<RoleComboboxProps> = ({
  includeEmpty = true,
  emptyLabel = 'Select Role...',
  onLoadError,
  ...dropdownProps
}) => {
  const [options, setOptions] = useState<RoleOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        setLoading(true);
        const client = new RoleClient();
        const response = await client.Query({});
        
        if (response && response.rows) {
          const roleOptions: RoleOption[] = (response.rows as any[])
            .filter((role: any) => role.roleName && role.roleId)
            .map((role: any) => ({
              label: role.roleName!,
              value: role.roleId!
            }))
            .sort((a: RoleOption, b: RoleOption) => a.label.localeCompare(b.label));

          if (includeEmpty) {
            roleOptions.unshift({ label: emptyLabel, value: 0 });
          }

          setOptions(roleOptions);
        } else {
          setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load roles';
        setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        if (onLoadError) {
          onLoadError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    loadRoles();
  }, [includeEmpty, emptyLabel, onLoadError]);

  return (
    <Dropdown
      {...dropdownProps}
      options={options}
      optionLabel="label"
      optionValue="value"
      loading={loading}
      placeholder={loading ? 'Loading roles...' : 'Select role...'}
    />
  );
};