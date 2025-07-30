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
    IQueryIocCategoryModelSearchQuery,
    IQueryIocCategoryModelPagedQueryResult,
 } from "./Models";

export type { 
    IQueryIocCategoryModelSearchQuery,
    IQueryIocCategoryModelPagedQueryResult,
};

export default interface IIocCategoryClient {
    
    /**
    * Query **QueryIocCategoryModel**
    * @description Query **QueryIocCategoryModel**
    * @operationId IocCategory_Query
    * @tag IocCategory
    * @tag model-query
    * @path /api/IocCategory/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryIocCategoryModel
    */
    Query(params: {
        body?: IQueryIocCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryIocCategoryModelSearchQuery        
    }): Promise<IQueryIocCategoryModelPagedQueryResult | undefined>;
}