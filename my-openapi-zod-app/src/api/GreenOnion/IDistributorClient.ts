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
    IQueryDistributorModelSearchQuery,
    IQueryDistributorModelPagedQueryResult,
    IQueryDistributorModel,
    ISaveDistributorModel,
 } from "./Models";
 
export type {
    IQueryDistributorModelSearchQuery,
    IQueryDistributorModelPagedQueryResult,
    IQueryDistributorModel,
    ISaveDistributorModel,
 };

export default interface IDistributorClient {
    /**
    * Query **QueryDistributorModel**
    * @description Query **QueryDistributorModel**
    * @operationId Distributor_Query
    * @tag Distributor
    * @tag model-query
    * @path /api/Distributor/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryDistributorModel
    */
    Query(params: {
        body?: IQueryDistributorModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryDistributorModelSearchQuery        
    }): Promise<IQueryDistributorModelPagedQueryResult | undefined>;
    /**
    * Get **QueryDistributorModel**
    * @description Get **QueryDistributorModel**
    * @operationId Distributor_Get
    * @tag Distributor
    * @tag model-getter
    * @path /api/Distributor/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryDistributorModel
    */
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQueryDistributorModel | undefined>;
    /**
    * Save **QueryDistributorModel**
    * @description Save **QueryDistributorModel**
    * @operationId Distributor_Save
    * @tag Distributor
    * @tag model-setter
    * @path /api/Distributor/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryDistributorModel
    */
    Save(params: {
        body?: ISaveDistributorModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveDistributorModel        
    }): Promise<IQueryDistributorModel | undefined>;
}