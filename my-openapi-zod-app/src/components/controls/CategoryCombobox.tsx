import React, { useState, useEffect } from 'react';
import { Dropdown } from './';
import CategoryClient from '@/api/GreenOnion/Clients/CategoryClient';
import type { DropdownProps } from 'primereact/dropdown';

interface CategoryOption {
  label: string;
  value: number;
}

interface CategoryComboboxProps extends Omit<DropdownProps, 'options' | 'optionLabel' | 'optionValue' | 'onError'> {
  includeEmpty?: boolean;
  emptyLabel?: string;
  onLoadError?: (error: string) => void;
}

export const CategoryCombobox: React.FC<CategoryComboboxProps> = ({
  includeEmpty = true,
  emptyLabel = 'Select Category...',
  onLoadError,
  ...dropdownProps
}) => {
  const [options, setOptions] = useState<CategoryOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const client = new CategoryClient();
        const response = await client.Query({});
        
        if (response && response.rows) {
          const categoryOptions: CategoryOption[] = (response.rows as any[])
            .filter((category: any) => category.categoryName && category.categoryId)
            .map((category: any) => ({
              label: category.categoryName!,
              value: category.categoryId!
            }))
            .sort((a: CategoryOption, b: CategoryOption) => a.label.localeCompare(b.label));

          if (includeEmpty) {
            categoryOptions.unshift({ label: emptyLabel, value: 0 });
          }

          setOptions(categoryOptions);
        } else {
          setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load categories';
        setOptions(includeEmpty ? [{ label: emptyLabel, value: 0 }] : []);
        if (onLoadError) {
          onLoadError(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, [includeEmpty, emptyLabel, onLoadError]);

  return (
    <Dropdown
      {...dropdownProps}
      options={options}
      optionLabel="label"
      optionValue="value"
      loading={loading}
      placeholder={loading ? 'Loading categories...' : 'Select category...'}
    />
  );
};