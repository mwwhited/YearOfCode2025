//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

// Models 
import type {
    IQueryIngredientModelSearchQuery,
    IQueryIngredientModelPagedQueryResult,
    IQueryIngredientModel,
    ISaveIngredientModel,
 } from "./Models";

export type { 
    IQueryIngredientModelSearchQuery,
    IQueryIngredientModelPagedQueryResult,
    IQueryIngredientModel,
    ISaveIngredientModel,
};

export default interface IIngredientClient {
    
    /**
    * Query **QueryIngredientModel**
    * @description Query **QueryIngredientModel**
    * @operationId Ingredient_Query
    * @tag Ingredient
    * @tag model-query
    * @path /api/Ingredient/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryIngredientModel
    */
    Query(params: {
        body?: IQueryIngredientModelSearchQuery | undefined;
    }): Promise<IQueryIngredientModelPagedQueryResult | undefined>;
    
    /**
    * Get **QueryIngredientModel**
    * @description Get **QueryIngredientModel**
    * @operationId Ingredient_Get
    * @tag Ingredient
    * @tag model-getter
    * @path /api/Ingredient/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryIngredientModel
    */
    Get(params: {
            id?: number | undefined;
            keyword?: string | undefined;
    }): Promise<IQueryIngredientModel | undefined>;
    
    /**
    * Save **QueryIngredientModel**
    * @description Save **QueryIngredientModel**
    * @operationId Ingredient_Save
    * @tag Ingredient
    * @tag model-setter
    * @path /api/Ingredient/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryIngredientModel
    */
    Save(params: {
        body?: ISaveIngredientModel | undefined;
    }): Promise<IQueryIngredientModel | undefined>;
}