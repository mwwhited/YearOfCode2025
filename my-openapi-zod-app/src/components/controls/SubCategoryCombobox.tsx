import React, { useState, useEffect } from 'react';
import { Dropdown } from './';
import SubCategoryClient from '@/api/GreenOnion/Clients/SubCategoryClient';
import type { DropdownProps } from 'primereact/dropdown';

interface SubCategoryOption {
  label: string;
  value: number;
}

interface SubCategoryComboboxProps extends Omit<DropdownProps, 'options' | 'optionLabel' | 'optionValue' | 'onLoadError'> {
  includeEmpty?: boolean;
  emptyLabel?: string;
  categoryId?: number; // Filter by category if provided
  onLoadError?: (error: string) => void;
}

export const SubCategoryCombobox: React.FC<SubCategoryComboboxProps> = ({
  includeEmpty = true,
  emptyLabel = 'Select Sub Category...',
  categoryId,
  onLoadError,
  ...dropdownProps
}) => {
  const [options, setOptions] = useState<SubCategoryOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSubCategories = async () => {
      try {
        setLoading(true);
        const client = new SubCategoryClient();
        const response = await client.Query({});
        
        if (response && response.rows) {
          let subCategoryOptions: SubCategoryOption[] = (response.rows as any[])
            .filter((subCategory: any) => subCategory.subCategoryName && subCategory.subCategoryId)
            .map((subCategory: any) => ({
              label: subCategory.subCategoryName!,
              value: subCategory.subCategoryId!
            }));

          // Filter by category if provided
          if (categoryId && categoryId > 0) {
            subCategoryOptions = subCategoryOptions.filter((option: SubCategoryOption) => {
              const subCategory = (response.rows! as any[]).find((sc: any) => sc.subCategoryId === option.value);
              return subCategory?.categoryId === categoryId;
            });
          }

          subCategoryOptions.sort((a: SubCategoryOption, b: SubCategoryOption) => a.label.localeCompare(b.label));

          if (includeEmpty) {
            subCategoryOptions.unshift({ label: emptyLabel, value: 0 });
          }

          setOptions(subCategoryOptions);
        } else {
          setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load sub categories';
        setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        if (onLoadError) {
          onLoadError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    loadSubCategories();
  }, [includeEmpty, emptyLabel, categoryId, onLoadError]);

  return (
    <Dropdown
      {...dropdownProps}
      options={options}
      optionLabel="label"
      optionValue="value"
      loading={loading}
      placeholder={loading ? 'Loading sub categories...' : 'Select sub category...'}
    />
  );
};