//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

type integer = number;

// Models 
import type { IQueryCategoryModelSearchQuery } from "./Models/IQueryCategoryModelSearchQuery";
import type { IQueryCategoryModelPagedQueryResult } from "./Models/IQueryCategoryModelPagedQueryResult";
import type { IQueryCategoryModel } from "./Models/IQueryCategoryModel";
import type { ISaveCategoryModel } from "./Models/ISaveCategoryModel";

export type { IQueryCategoryModelSearchQuery };
export type { IQueryCategoryModelPagedQueryResult };
export type { IQueryCategoryModel };
export type { ISaveCategoryModel };

export interface ICategoryClient {

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