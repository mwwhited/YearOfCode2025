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
import type { IQueryOneWorldSyncProductModelSearchQuery } from "./Models/IQueryOneWorldSyncProductModelSearchQuery";
import type { IQueryOneWorldSyncProductModelPagedQueryResult } from "./Models/IQueryOneWorldSyncProductModelPagedQueryResult";
import type { IQueryOneWorldSyncProductModel } from "./Models/IQueryOneWorldSyncProductModel";
import type { ISaveOneWorldSyncProductModel } from "./Models/ISaveOneWorldSyncProductModel";

export type { IQueryOneWorldSyncProductModelSearchQuery };
export type { IQueryOneWorldSyncProductModelPagedQueryResult };
export type { IQueryOneWorldSyncProductModel };
export type { ISaveOneWorldSyncProductModel };

export interface IOneWorldSyncProductClient {

    /**
    * Query **QueryOneWorldSyncProductModel**
    * @description Query **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Query
    * @tag OneWorldSyncProduct
    * @tag model-query
    * @path /api/OneWorldSyncProduct/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    Query(params: {
        body?: IQueryOneWorldSyncProductModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryOneWorldSyncProductModelSearchQuery        
    }): Promise<IQueryOneWorldSyncProductModelPagedQueryResult | undefined>;
    /**
    * Get **QueryOneWorldSyncProductModel**
    * @description Get **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Get
    * @tag OneWorldSyncProduct
    * @tag model-getter
    * @path /api/OneWorldSyncProduct/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    Get(params: {
            id?: number | undefined;
            gtin?: string | undefined;
            upc?: string | undefined;
    }): Promise<IQueryOneWorldSyncProductModel | undefined>;
    /**
    * Save **QueryOneWorldSyncProductModel**
    * @description Save **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Save
    * @tag OneWorldSyncProduct
    * @tag model-setter
    * @path /api/OneWorldSyncProduct/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    Save(params: {
        body?: ISaveOneWorldSyncProductModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveOneWorldSyncProductModel        
    }): Promise<IQueryOneWorldSyncProductModel | undefined>;
}