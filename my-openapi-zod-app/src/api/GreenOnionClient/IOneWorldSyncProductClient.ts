//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryOneWorldSyncProductModelSearchQuery } from "./IQueryOneWorldSyncProductModelSearchQuery";
import type { IQueryOneWorldSyncProductModelPagedQueryResult } from "./IQueryOneWorldSyncProductModelPagedQueryResult";
import type { IQueryOneWorldSyncProductModel } from "./IQueryOneWorldSyncProductModel";
import type { ISaveOneWorldSyncProductModel } from "./ISaveOneWorldSyncProductModel";

export type { IQueryOneWorldSyncProductModelSearchQuery };
export type { IQueryOneWorldSyncProductModelPagedQueryResult };
export type { IQueryOneWorldSyncProductModel };
export type { ISaveOneWorldSyncProductModel };

type integer = number;

export interface IOneWorldSyncProductClient {

    /**
    *
    * Query **QueryOneWorldSyncProductModel**
    *
    * @description Query **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Query
    * @tag OneWorldSyncProduct
    * @tag model-query
    * @path /api/OneWorldSyncProduct/Query
    */
    Query(params: {
        body?: IQueryOneWorldSyncProductModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryOneWorldSyncProductModelSearchQuery
    }): Promise<IQueryOneWorldSyncProductModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryOneWorldSyncProductModelPagedQueryResult
    
    
    /**
    *
    * Get **QueryOneWorldSyncProductModel**
    *
    * @description Get **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Get
    * @tag OneWorldSyncProduct
    * @tag model-getter
    * @path /api/OneWorldSyncProduct/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            gtin?: string | undefined; // 
            upc?: string | undefined; // 
    }): Promise<IQueryOneWorldSyncProductModel>;
    /**
    *
    * Save **QueryOneWorldSyncProductModel**
    *
    * @description Save **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Save
    * @tag OneWorldSyncProduct
    * @tag model-setter
    * @path /api/OneWorldSyncProduct/Save
    */
    Save(params: {
        body?: ISaveOneWorldSyncProductModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveOneWorldSyncProductModel
    }): Promise<IQueryOneWorldSyncProductModel>; // #/components/schemas/GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    

}
