import { useState, useEffect } from 'react';
import { Dropdown } from './Dropdown';
import IngredientClient from '@/api/GreenOnion/Clients/IngredientClient';
import type { IQueryIngredientModel } from '@/api/GreenOnion/Models';

interface IngredientComboboxProps {
  value?: number | null;
  onChange: (value: number | null) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  showClear?: boolean;
  filter?: boolean;
  filterPlaceholder?: string;
  emptyFilterMessage?: string;
  required?: boolean;
}

export const IngredientCombobox: React.FC<IngredientComboboxProps> = ({
  value,
  onChange,
  placeholder = 'Select an ingredient',
  disabled = false,
  className = '',
  showClear = false,
  filter = true,
  filterPlaceholder = 'Search ingredients',
  emptyFilterMessage = 'No ingredients found',
  required = false
}) => {
  const [ingredients, setIngredients] = useState<IQueryIngredientModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIngredients = async () => {
      setLoading(true);
      try {
        const client = new IngredientClient();
        const response = await client.Query({ 
          body: { 
            pageSize: 1000,
            orderBy: { ingredientName: 'asc' }
          } 
        });
        
        if (response && response.rows) {
          setIngredients((response.rows as IQueryIngredientModel[]).filter((i: any) => i.ingredientId != null));
        }
      } catch (error) {
        console.error('Failed to load ingredients:', error);
        setIngredients([]);
      } finally {
        setLoading(false);
      }
    };

    loadIngredients();
  }, []);

  const options = ingredients.map(ingredient => ({
    label: ingredient.ingredientName || '',
    value: ingredient.ingredientId!
  }));

  return (
    <Dropdown
      value={value}
      onChange={(e) => onChange(e.value)}
      options={options}
      placeholder={placeholder}
      disabled={disabled || loading}
      className={`w-full ${className}`}
      showClear={showClear}
      filter={filter}
      filterPlaceholder={filterPlaceholder}
      emptyFilterMessage={emptyFilterMessage}
      loading={loading}
      required={required}
    />
  );
};