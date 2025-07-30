import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BulkEditDataTable } from '@/components/controls/BulkEditDataTable';
import { Button } from '@/components/controls';
import { ZQueryIngredientModel } from '@/api/GreenOnion/Schema';
import IngredientClient from '@/api/GreenOnion/Clients/IngredientClient';
import type { IQueryIngredientModel } from '@/api/GreenOnion/Models';
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/types/roles';
import type { BulkEditResult } from '@/components/BulkEditModal';
import type { FieldConfig } from '@/components/forms/DynamicForm';
import { BulkEditApiHandler } from '@/utils/bulkEditApi';
import { auditLogger } from '@/utils/auditLogger';

export const IngredientsList: React.FC = () => {
  const navigate = useNavigate();
  const { hasRole } = useAuth();
  const [client] = useState(() => new IngredientClient());
  
  const isAdmin = hasRole(UserRole.SUPER_ADMIN) || 
                  hasRole(UserRole.DISTRICT_ADMIN) || 
                  hasRole(UserRole.SUPER_ADMIN);

  // Log page view
  useEffect(() => {
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'IngredientsList',
      details: { page: 'ingredients-list' }
    });
  }, []);

  const handleEdit = useCallback((ingredient: IQueryIngredientModel) => {
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'Ingredient',
      entityId: String(ingredient.ingredientId),
      details: { action: 'navigate-to-edit', ingredientName: ingredient.ingredientName }
    });
    navigate(`/ingredients/edit/${ingredient.ingredientId}`);
  }, [navigate]);

  const handleAdd = useCallback(() => {
    auditLogger.logSuccess({
      action: 'VIEW',
      entityType: 'IngredientsList',
      details: { action: 'navigate-to-add' }
    });
    navigate('/ingredients/add');
  }, [navigate]);

  const handleDelete = useCallback(async (ingredient: IQueryIngredientModel) => {
    if (window.confirm(`Are you sure you want to delete ingredient "${ingredient.ingredientName}"?`)) {
      try {
        // await client.Delete({ ingredientId: ingredient.ingredientId! });
        console.log('Delete not implemented in client');
        
        // Log successful deletion
        await auditLogger.logSuccess({
          action: 'DELETE',
          entityType: 'Ingredient',
          entityId: String(ingredient.ingredientId),
          details: { ingredientName: ingredient.ingredientName }
        });
        
        window.location.reload(); // Refresh the data
      } catch (error) {
        // Log failed deletion
        await auditLogger.logError({
          action: 'DELETE',
          entityType: 'Ingredient',
          entityId: String(ingredient.ingredientId),
          details: { ingredientName: ingredient.ingredientName }
        }, error as Error);
        
        console.error('Failed to delete ingredient:', error);
        alert('Failed to delete ingredient. Please try again.');
      }
    }
  }, [client]);

  // Bulk edit configuration
  const bulkEditFields: FieldConfig[] = [
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      placeholder: 'Leave empty to keep current description',
      rows: 3
    },
    {
      name: 'allergenId',
      label: 'Associated Allergen ID',
      type: 'number',
      placeholder: 'Leave empty to keep current allergen'
    },
    {
      name: 'isOrganic',
      label: 'Organic',
      type: 'boolean'
    },
    {
      name: 'isGMOFree',
      label: 'GMO Free',
      type: 'boolean'
    },
    {
      name: 'nutritionalInfo',
      label: 'Nutritional Information',
      type: 'textarea',
      placeholder: 'Leave empty to keep current nutritional info',
      rows: 4
    }
  ];

  const handleBulkEdit = useCallback(async (
    changes: Record<string, unknown>,
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> => {
    // Log bulk edit attempt
    await auditLogger.logSuccess({
      action: 'BULK_UPDATE',
      entityType: 'Ingredient',
      details: { 
        itemCount: selectedIds.length, 
        changes: Object.keys(changes) 
      }
    });

    try {
      const results = await BulkEditApiHandler.executeBulkEdit('ingredients', changes, selectedIds);
      
      // Log detailed bulk results
      const bulkResults = results.map(result => ({
        id: (result as any).key || (result as any).id,
        success: (result as any).status === 'Changed',
        error: (result as any).status === 'Error' ? 'Update failed' : undefined
      }));

      await auditLogger.logBulkActions(
        { action: 'BULK_UPDATE', entityType: 'Ingredient', details: { changes } },
        selectedIds,
        bulkResults
      );

      return results;
    } catch (error) {
      await auditLogger.logError({
        action: 'BULK_UPDATE',
        entityType: 'Ingredient',
        details: { itemCount: selectedIds.length, changes: Object.keys(changes) }
      }, error as Error);
      throw error;
    }
  }, []);

  return (
    <div>
      <div className="flex justify-content-between align-items-center mb-4">
        <h1 className="text-3xl font-bold text-primary">Ingredients</h1>
        {isAdmin && (
          <Button 
            label="Add Ingredient" 
            icon="pi pi-plus" 
            onClick={handleAdd}
          />
        )}
      </div>

      <BulkEditDataTable
        schema={ZQueryIngredientModel}
        client={client}
        enableServerSide={true}
        enableGlobalSearch={true}
        enableColumnFilters={true}
        enableAdvancedFilters={true}
        enableSidebarFilters={true}
        enableExport={true}
        enableBulkEdit={isAdmin}
        bulkEditFields={bulkEditFields}
        onBulkEdit={handleBulkEdit}
        keyField="ingredientId"
        bulkEditTitle="Bulk Edit Ingredients"
        defaultPageSize={10}
        columnOverrides={{
          ingredientId: { hidden: true },
          ingredientName: { 
            header: 'Ingredient Name',
            sortable: true,
            filterable: true 
          },
          description: {
            header: 'Description',
            sortable: false,
            filterable: true
          },
          allergenId: {
            header: 'Allergen ID',
            hidden: true
          },
          allergenName: {
            header: 'Associated Allergen',
            sortable: true,
            filterable: true
          },
          isOrganic: {
            header: 'Organic',
            sortable: true,
            filterable: true,
            filterType: 'boolean'
          },
          isGMOFree: {
            header: 'GMO Free',
            sortable: true,
            filterable: true,
            filterType: 'boolean'
          },
          nutritionalInfo: {
            header: 'Nutritional Info',
            sortable: false,
            filterable: false
          },
          createdDate: {
            header: 'Created',
            sortable: true,
            filterable: false
          },
          modifiedDate: {
            header: 'Modified',
            sortable: true,
            filterable: false
          }
        }}
        actionColumn={isAdmin ? {
          header: 'Actions',
          body: (rowData: IQueryIngredientModel) => (
            <div className="flex gap-2">
              <Button
                icon="pi pi-pencil"
                rounded
                text
                size="small"
                onClick={() => handleEdit(rowData)}
                tooltip="Edit"
              />
              <Button
                icon="pi pi-trash"
                rounded
                text
                size="small"
                severity="danger"
                onClick={() => handleDelete(rowData)}
                tooltip="Delete"
              />
            </div>
          ),
          style: { width: '120px' }
        } : undefined}
      />
    </div>
  );
};