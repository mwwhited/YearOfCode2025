//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQuerySubCategoryModelSearchQuery } from "./Models/IQuerySubCategoryModelSearchQuery";
import type { IQuerySubCategoryModelPagedQueryResult } from "./Models/IQuerySubCategoryModelPagedQueryResult";
import type { IQuerySubCategoryModel } from "./Models/IQuerySubCategoryModel";
import type { ISaveSubCategoryModel } from "./Models/ISaveSubCategoryModel";

export type { IQuerySubCategoryModelSearchQuery };
export type { IQuerySubCategoryModelPagedQueryResult };
export type { IQuerySubCategoryModel };
export type { ISaveSubCategoryModel };

type integer = number;

export interface ISubCategoryClient {

    /**
    *
    * Query **QuerySubCategoryModel**
    *
    * @description Query **QuerySubCategoryModel**
    * @operationId SubCategory_Query
    * @tag SubCategory
    * @tag model-query
    * @path /api/SubCategory/Query
    */
    Query(params: {
        body?: IQuerySubCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QuerySubCategoryModelSearchQuery
    }): Promise<IQuerySubCategoryModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QuerySubCategoryModelPagedQueryResult
    
    
    /**
    *
    * Get **QuerySubCategoryModel**
    *
    * @description Get **QuerySubCategoryModel**
    * @operationId SubCategory_Get
    * @tag SubCategory
    * @tag model-getter
    * @path /api/SubCategory/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQuerySubCategoryModel>;
    /**
    *
    * Save **QuerySubCategoryModel**
    *
    * @description Save **QuerySubCategoryModel**
    * @operationId SubCategory_Save
    * @tag SubCategory
    * @tag model-setter
    * @path /api/SubCategory/Save
    */
    Save(params: {
        body?: ISaveSubCategoryModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveSubCategoryModel
    }): Promise<IQuerySubCategoryModel>; // #/components/schemas/GreenOnion.Common.Models.QuerySubCategoryModel
    

}
