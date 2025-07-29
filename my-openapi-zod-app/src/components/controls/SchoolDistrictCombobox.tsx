import React, { useState, useEffect } from 'react';
import { Dropdown } from './';
import SchoolDistrictClient from '@/api/GreenOnion/Clients/SchoolDistrictClient';
import type { DropdownProps } from 'primereact/dropdown';

interface SchoolDistrictOption {
  label: string;
  value: number;
}

interface SchoolDistrictComboboxProps extends Omit<DropdownProps, 'options' | 'optionLabel' | 'optionValue' | 'onError'> {
  includeEmpty?: boolean;
  emptyLabel?: string;
  onLoadError?: (error: string) => void;
}

export const SchoolDistrictCombobox: React.FC<SchoolDistrictComboboxProps> = ({
  includeEmpty = true,
  emptyLabel = 'Select School District...',
  onLoadError,
  ...dropdownProps
}) => {
  const [options, setOptions] = useState<SchoolDistrictOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSchoolDistricts = async () => {
      try {
        setLoading(true);
        const client = new SchoolDistrictClient();
        const response = await client.Query({});
        
        if (response && response.rows) {
          const districtOptions: SchoolDistrictOption[] = response.rows
            .filter(district => district.districtName && district.schoolDistrictId)
            .map(district => ({
              label: district.districtName!,
              value: district.schoolDistrictId!
            }))
            .sort((a, b) => a.label.localeCompare(b.label));

          if (includeEmpty) {
            districtOptions.unshift({ label: emptyLabel, value: 0 });
          }

          setOptions(districtOptions);
        } else {
          setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load school districts';
        setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        if (onLoadError) {
          onLoadError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    loadSchoolDistricts();
  }, [includeEmpty, emptyLabel, onLoadError]);

  return (
    <Dropdown
      {...dropdownProps}
      options={options}
      optionLabel="label"
      optionValue="value"
      loading={loading}
      placeholder={loading ? 'Loading districts...' : 'Select district...'}
    />
  );
};