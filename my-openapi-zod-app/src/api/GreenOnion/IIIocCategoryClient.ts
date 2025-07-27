//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

// Models 
import type {
    IQueryIocCategoryModelSearchQuery,
    IQueryIocCategoryModelPagedQueryResult,
 } from "./Models";
 
export type {
    IQueryIocCategoryModelSearchQuery,
    IQueryIocCategoryModelPagedQueryResult,
 };

export default interface IIIocCategoryClient {
    /**
    * Query **QueryIocCategoryModel**
    * @description Query **QueryIocCategoryModel**
    * @operationId IIocCategory_Query
    * @tag IIocCategory
    * @tag model-query
    * @path /api/IIocCategory/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryIocCategoryModel
    */
    Query(params: {
        body?: IQueryIocCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryIocCategoryModelSearchQuery        
    }): Promise<IQueryIocCategoryModelPagedQueryResult | undefined>;
}