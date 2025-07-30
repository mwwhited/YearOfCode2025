import type { BulkEditResult } from '@/components/BulkEditModal';
import ProductClient from '@/api/GreenOnion/Clients/ProductClient';
import CategoryClient from '@/api/GreenOnion/Clients/CategoryClient';
import UserClient from '@/api/GreenOnion/Clients/UserClient';
import IngredientClient from '@/api/GreenOnion/Clients/IngredientClient';
import AllergenClient from '@/api/GreenOnion/Clients/AllergenClient';
import ManufacturerClient from '@/api/GreenOnion/Clients/ManufacturerClient';
import { logger } from './logger';

/**
 * Generic bulk edit operation result
 */
export interface BulkEditOperation<T> {
  entityType: string;
  changes: Partial<T>;
  selectedIds: (string | number)[];
}

/**
 * Bulk edit API handler for different entity types
 */
export class BulkEditApiHandler {
  /**
   * Execute bulk edit operation for products
   */
  static async bulkEditProducts(
    changes: Record<string, unknown>,
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> {
    const client = new ProductClient();
    const results: BulkEditResult[] = [];

    for (const productId of selectedIds) {
      try {
        // Get current product data
        const currentProduct = await client.Get({ productId: Number(productId) });
        
        if (!currentProduct) {
          results.push({
            key: productId,
            status: 'Not Found'
          });
          continue;
        }

        // Create update payload with merged data
        const updateData = {
          productId: Number(productId),
          productName: currentProduct.productName || '',
          manufacturerId: changes.manufacturerId || currentProduct.manufacturerId,
          categoryId: changes.categoryId || currentProduct.categoryId,
          isActive: changes.isActive !== undefined ? changes.isActive : currentProduct.isActive,
          unitPrice: changes.unitPrice || currentProduct.unitPrice,
          unitsInStock: changes.unitsInStock || currentProduct.unitsInStock,
          description: changes.description || currentProduct.description
        };

        // Remove undefined/null values
        Object.keys(updateData).forEach(key => {
          const value = updateData[key as keyof typeof updateData];
          if (value === undefined || value === null) {
            delete updateData[key as keyof typeof updateData];
          }
        });

        await client.Update({ body: updateData });
        
        results.push({
          key: productId,
          status: 'Changed'
        });

        logger.info(`Product ${productId} updated successfully`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        logger.error(`Failed to update product ${productId}:`, error);
        
        results.push({
          key: productId,
          status: 'Error',
          error: errorMessage
        });
      }
    }

    return results;
  }

  /**
   * Execute bulk edit operation for categories
   */
  static async bulkEditCategories(
    changes: Record<string, unknown>,
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> {
    const client = new CategoryClient();
    const results: BulkEditResult[] = [];

    for (const categoryId of selectedIds) {
      try {
        const currentCategory = await client.Get({ categoryId: Number(categoryId) });
        
        if (!currentCategory) {
          results.push({
            key: categoryId,
            status: 'Not Found'
          });
          continue;
        }

        const updateData = {
          categoryId: Number(categoryId),
          categoryName: currentCategory.categoryName || '',
          description: changes.description || currentCategory.description,
          isActive: changes.isActive !== undefined ? changes.isActive : currentCategory.isActive
        };

        Object.keys(updateData).forEach(key => {
          const value = updateData[key as keyof typeof updateData];
          if (value === undefined || value === null) {
            delete updateData[key as keyof typeof updateData];
          }
        });

        await client.Update({ body: updateData });
        
        results.push({
          key: categoryId,
          status: 'Changed'
        });
      } catch (error) {
        results.push({
          key: categoryId,
          status: 'Error',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return results;
  }

  /**
   * Execute bulk edit operation for users
   */
  static async bulkEditUsers(
    changes: Record<string, unknown>,
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> {
    const client = new UserClient();
    const results: BulkEditResult[] = [];

    for (const userId of selectedIds) {
      try {
        const currentUser = await client.Get({ userId: Number(userId) });
        
        if (!currentUser) {
          results.push({
            key: userId,
            status: 'Not Found'
          });
          continue;
        }

        const updateData = {
          userId: Number(userId),
          username: currentUser.username || '',
          email: currentUser.email || '',
          firstName: currentUser.firstName || '',
          lastName: currentUser.lastName || '',
          roleId: changes.roleId || currentUser.roleId,
          districtId: changes.districtId || currentUser.districtId,
          manufacturerId: changes.manufacturerId || currentUser.manufacturerId,
          isActive: changes.isActive !== undefined ? changes.isActive : currentUser.isActive
        };

        Object.keys(updateData).forEach(key => {
          const value = updateData[key as keyof typeof updateData];
          if (value === undefined || value === null) {
            delete updateData[key as keyof typeof updateData];
          }
        });

        await client.Update({ body: updateData });
        
        results.push({
          key: userId,
          status: 'Changed'
        });
      } catch (error) {
        results.push({
          key: userId,
          status: 'Error',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return results;
  }

  /**
   * Execute bulk edit operation for ingredients
   */
  static async bulkEditIngredients(
    changes: Record<string, unknown>,
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> {
    const client = new IngredientClient();
    const results: BulkEditResult[] = [];

    for (const ingredientId of selectedIds) {
      try {
        const currentIngredient = await client.Get({ ingredientId: Number(ingredientId) });
        
        if (!currentIngredient) {
          results.push({
            key: ingredientId,
            status: 'Not Found'
          });
          continue;
        }

        const updateData = {
          ingredientId: Number(ingredientId),
          ingredientName: currentIngredient.ingredientName || '',
          description: changes.description || currentIngredient.description,
          allergenId: changes.allergenId || currentIngredient.allergenId,
          isOrganic: changes.isOrganic !== undefined ? changes.isOrganic : currentIngredient.isOrganic,
          isGMOFree: changes.isGMOFree !== undefined ? changes.isGMOFree : currentIngredient.isGMOFree,
          nutritionalInfo: changes.nutritionalInfo || currentIngredient.nutritionalInfo
        };

        Object.keys(updateData).forEach(key => {
          const value = updateData[key as keyof typeof updateData];
          if (value === undefined || value === null) {
            delete updateData[key as keyof typeof updateData];
          }
        });

        await client.Update({ body: updateData });
        
        results.push({
          key: ingredientId,
          status: 'Changed'
        });
      } catch (error) {
        results.push({
          key: ingredientId,
          status: 'Error',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return results;
  }

  /**
   * Execute bulk edit operation for allergens
   */
  static async bulkEditAllergens(
    changes: Record<string, unknown>,
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> {
    const client = new AllergenClient();
    const results: BulkEditResult[] = [];

    for (const allergenId of selectedIds) {
      try {
        const current = await client.Get({ allergenId: Number(allergenId) });
        
        if (!current) {
          results.push({
            key: allergenId,
            status: 'Not Found'
          });
          continue;
        }

        const updateData = {
          allergenId: Number(allergenId),
          allergenName: current.allergenName || '',
          description: changes.description || current.description,
          isActive: changes.isActive !== undefined ? changes.isActive : current.isActive
        };

        Object.keys(updateData).forEach(key => {
          const value = updateData[key as keyof typeof updateData];
          if (value === undefined || value === null) {
            delete updateData[key as keyof typeof updateData];
          }
        });

        await client.Update({ body: updateData });
        
        results.push({
          key: allergenId,
          status: 'Changed'
        });
      } catch (error) {
        results.push({
          key: allergenId,
          status: 'Error',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return results;
  }

  /**
   * Generic bulk edit handler that routes to appropriate entity handler
   */
  static async executeBulkEdit(
    entityType: string,
    changes: Record<string, unknown>,
    selectedIds: (string | number)[]
  ): Promise<BulkEditResult[]> {
    logger.info(`Starting bulk edit for ${entityType}:`, {
      entityType,
      changesCount: Object.keys(changes).length,
      itemsCount: selectedIds.length
    });

    let results: BulkEditResult[];

    switch (entityType.toLowerCase()) {
      case 'product':
      case 'products':
        results = await this.bulkEditProducts(changes, selectedIds);
        break;
      
      case 'category':
      case 'categories':
        results = await this.bulkEditCategories(changes, selectedIds);
        break;
      
      case 'user':
      case 'users':
        results = await this.bulkEditUsers(changes, selectedIds);
        break;
      
      case 'ingredient':
      case 'ingredients':
        results = await this.bulkEditIngredients(changes, selectedIds);
        break;
      
      case 'allergen':
      case 'allergens':
        results = await this.bulkEditAllergens(changes, selectedIds);
        break;
      
      default:
        throw new Error(`Bulk edit not supported for entity type: ${entityType}`);
    }

    const summary = {
      total: results.length,
      changed: results.filter(r => r.status === 'Changed').length,
      notChanged: results.filter(r => r.status === 'Not Changed').length,
      errors: results.filter(r => r.status === 'Error').length,
      notFound: results.filter(r => r.status === 'Not Found').length
    };

    logger.info(`Bulk edit completed for ${entityType}:`, summary);

    return results;
  }
}