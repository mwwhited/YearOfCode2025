//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryDistributorModelSearchQuery } from "./IQueryDistributorModelSearchQuery";
import type { IQueryDistributorModelPagedQueryResult } from "./IQueryDistributorModelPagedQueryResult";
import type { IQueryDistributorModel } from "./IQueryDistributorModel";
import type { ISaveDistributorModel } from "./ISaveDistributorModel";

export type { IQueryDistributorModelSearchQuery };
export type { IQueryDistributorModelPagedQueryResult };
export type { IQueryDistributorModel };
export type { ISaveDistributorModel };

type integer = number;

export interface IDistributorClient {

    /**
    *
    * Query **QueryDistributorModel**
    *
    * @description Query **QueryDistributorModel**
    * @operationId Distributor_Query
    * @tag Distributor
    * @tag model-query
    * @path /api/Distributor/Query
    */
    Query(params: {
        body?: IQueryDistributorModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryDistributorModelSearchQuery
    }): Promise<IQueryDistributorModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryDistributorModelPagedQueryResult
    
    
    /**
    *
    * Get **QueryDistributorModel**
    *
    * @description Get **QueryDistributorModel**
    * @operationId Distributor_Get
    * @tag Distributor
    * @tag model-getter
    * @path /api/Distributor/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQueryDistributorModel>;
    /**
    *
    * Save **QueryDistributorModel**
    *
    * @description Save **QueryDistributorModel**
    * @operationId Distributor_Save
    * @tag Distributor
    * @tag model-setter
    * @path /api/Distributor/Save
    */
    Save(params: {
        body?: ISaveDistributorModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveDistributorModel
    }): Promise<IQueryDistributorModel>; // #/components/schemas/GreenOnion.Common.Models.QueryDistributorModel
    

}
