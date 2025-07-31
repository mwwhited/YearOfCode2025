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
    IQuerySubCategoryModelSearchQuery,
    IQuerySubCategoryModelPagedQueryResult,
    IQuerySubCategoryModel,
    ISaveSubCategoryModel,
 } from "./Models";

export type { 
    IQuerySubCategoryModelSearchQuery,
    IQuerySubCategoryModelPagedQueryResult,
    IQuerySubCategoryModel,
    ISaveSubCategoryModel,
};

export default interface ISubCategoryClient {
    
    /**
    * Query **QuerySubCategoryModel**
    * @description Query **QuerySubCategoryModel**
    * @operationId SubCategory_Query
    * @tag SubCategory
    * @tag model-query
    * @path /api/SubCategory/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySubCategoryModel
    */
    Query(params: {
        body?: IQuerySubCategoryModelSearchQuery | undefined;
    }): Promise<IQuerySubCategoryModelPagedQueryResult | undefined>;
    
    /**
    * Get **QuerySubCategoryModel**
    * @description Get **QuerySubCategoryModel**
    * @operationId SubCategory_Get
    * @tag SubCategory
    * @tag model-getter
    * @path /api/SubCategory/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySubCategoryModel
    */
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQuerySubCategoryModel | undefined>;
    
    /**
    * Save **QuerySubCategoryModel**
    * @description Save **QuerySubCategoryModel**
    * @operationId SubCategory_Save
    * @tag SubCategory
    * @tag model-setter
    * @path /api/SubCategory/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QuerySubCategoryModel
    */
    Save(params: {
        body?: ISaveSubCategoryModel | undefined;
    }): Promise<IQuerySubCategoryModel | undefined>;
}