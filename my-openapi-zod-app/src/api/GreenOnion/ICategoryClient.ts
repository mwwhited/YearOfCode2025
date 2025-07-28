//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

// Models 
import type {
    IQueryCategoryModelSearchQuery,
    IQueryCategoryModelPagedQueryResult,
    IQueryCategoryModel,
    ISaveCategoryModel,
 } from "./Models";
 
export type {
    IQueryCategoryModelSearchQuery,
    IQueryCategoryModelPagedQueryResult,
    IQueryCategoryModel,
    ISaveCategoryModel,
 };

export default interface ICategoryClient {
    /**
    * Query **QueryCategoryModel**
    * @description Query **QueryCategoryModel**
    * @operationId Category_Query
    * @tag Category
    * @tag model-query
    * @path /api/Category/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryCategoryModel
    */
    Query(params: {
        body?: IQueryCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryCategoryModelSearchQuery        
    }): Promise<IQueryCategoryModelPagedQueryResult | undefined>;
    /**
    * Get **QueryCategoryModel**
    * @description Get **QueryCategoryModel**
    * @operationId Category_Get
    * @tag Category
    * @tag model-getter
    * @path /api/Category/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryCategoryModel
    */ 
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQueryCategoryModel | undefined>;
    /**
    * Save **QueryCategoryModel**
    * @description Save **QueryCategoryModel**
    * @operationId Category_Save
    * @tag Category
    * @tag model-setter
    * @path /api/Category/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryCategoryModel
    */
    Save(params: {
        body?: ISaveCategoryModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveCategoryModel        
    }): Promise<IQueryCategoryModel | undefined>;
}