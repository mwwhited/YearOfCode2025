//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryIocCategoryModelSearchQuery } from "./Models/IQueryIocCategoryModelSearchQuery";
import type { IQueryIocCategoryModelPagedQueryResult } from "./Models/IQueryIocCategoryModelPagedQueryResult";

export type { IQueryIocCategoryModelSearchQuery };
export type { IQueryIocCategoryModelPagedQueryResult };

type integer = number;

export interface IIIocCategoryClient {

    /**
    *
    * Query **QueryIocCategoryModel**
    *
    * @description Query **QueryIocCategoryModel**
    * @operationId IIocCategory_Query
    * @tag IIocCategory
    * @tag model-query
    * @path /api/IIocCategory/Query
    */
    Query(params: {
        body?: IQueryIocCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryIocCategoryModelSearchQuery
    }): Promise<IQueryIocCategoryModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryIocCategoryModelPagedQueryResult
    

}
