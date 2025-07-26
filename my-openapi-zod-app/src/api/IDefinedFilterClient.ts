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
import type { IQueryDefinedFilterModelSearchQuery } from "./Models/IQueryDefinedFilterModelSearchQuery";
import type { IQueryDefinedFilterModelPagedQueryResult } from "./Models/IQueryDefinedFilterModelPagedQueryResult";
import type { IQueryDefinedFilterModel } from "./Models/IQueryDefinedFilterModel";
import type { ISaveDefinedFilterModel } from "./Models/ISaveDefinedFilterModel";

export type { IQueryDefinedFilterModelSearchQuery };
export type { IQueryDefinedFilterModelPagedQueryResult };
export type { IQueryDefinedFilterModel };
export type { ISaveDefinedFilterModel };

export interface IDefinedFilterClient {

    /**
    * Query **QueryDefinedFilterModel**
    * @description Query **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Query
    * @tag DefinedFilter
    * @tag model-query
    * @path /api/DefinedFilter/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryDefinedFilterModel
    */
    Query(params: {
        body?: IQueryDefinedFilterModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryDefinedFilterModelSearchQuery        
    }): Promise<IQueryDefinedFilterModelPagedQueryResult | undefined>;
    /**
    * Get **QueryDefinedFilterModel**
    * @description Get **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Get
    * @tag DefinedFilter
    * @tag model-getter
    * @path /api/DefinedFilter/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryDefinedFilterModel
    */
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
            path?: string | undefined;
    }): Promise<IQueryDefinedFilterModel | undefined>;
    /**
    * Save **QueryDefinedFilterModel**
    * @description Save **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Save
    * @tag DefinedFilter
    * @tag model-setter
    * @path /api/DefinedFilter/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryDefinedFilterModel
    */
    Save(params: {
        body?: ISaveDefinedFilterModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveDefinedFilterModel        
    }): Promise<IQueryDefinedFilterModel | undefined>;
}