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
    IQueryDefinedFilterModelSearchQuery,
    IQueryDefinedFilterModelPagedQueryResult,
    IQueryDefinedFilterModel,
    ISaveDefinedFilterModel,
 } from "./Models";

export type { 
    IQueryDefinedFilterModelSearchQuery,
    IQueryDefinedFilterModelPagedQueryResult,
    IQueryDefinedFilterModel,
    ISaveDefinedFilterModel,
};

export default interface IDefinedFilterClient {
    
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