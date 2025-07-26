//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryIngredientModelSearchQuery } from "./Models/IQueryIngredientModelSearchQuery";
import type { IQueryIngredientModelPagedQueryResult } from "./Models/IQueryIngredientModelPagedQueryResult";
import type { IQueryIngredientModel } from "./Models/IQueryIngredientModel";
import type { ISaveIngredientModel } from "./Models/ISaveIngredientModel";

export type { IQueryIngredientModelSearchQuery };
export type { IQueryIngredientModelPagedQueryResult };
export type { IQueryIngredientModel };
export type { ISaveIngredientModel };

type integer = number;

export interface IIngredientClient {

    /**
    *
    * Query **QueryIngredientModel**
    *
    * @description Query **QueryIngredientModel**
    * @operationId Ingredient_Query
    * @tag Ingredient
    * @tag model-query
    * @path /api/Ingredient/Query
    */
    Query(params: {
        body?: IQueryIngredientModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryIngredientModelSearchQuery
    }): Promise<IQueryIngredientModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryIngredientModelPagedQueryResult
    
    
    /**
    *
    * Get **QueryIngredientModel**
    *
    * @description Get **QueryIngredientModel**
    * @operationId Ingredient_Get
    * @tag Ingredient
    * @tag model-getter
    * @path /api/Ingredient/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            keyword?: string | undefined; // 
    }): Promise<IQueryIngredientModel>;
    /**
    *
    * Save **QueryIngredientModel**
    *
    * @description Save **QueryIngredientModel**
    * @operationId Ingredient_Save
    * @tag Ingredient
    * @tag model-setter
    * @path /api/Ingredient/Save
    */
    Save(params: {
        body?: ISaveIngredientModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveIngredientModel
    }): Promise<IQueryIngredientModel>; // #/components/schemas/GreenOnion.Common.Models.QueryIngredientModel
    

}
