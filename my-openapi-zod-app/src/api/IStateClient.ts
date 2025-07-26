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
import type { IQueryStateModelSearchQuery } from "./Models/IQueryStateModelSearchQuery";
import type { IQueryStateModelPagedQueryResult } from "./Models/IQueryStateModelPagedQueryResult";

export type { IQueryStateModelSearchQuery };
export type { IQueryStateModelPagedQueryResult };

export interface IStateClient {

    /**
    * Query **QueryStateModel**
    * @description Query **QueryStateModel**
    * @operationId State_Query
    * @tag State
    * @tag model-query
    * @path /api/State/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryStateModel
    */
    Query(params: {
        body?: IQueryStateModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryStateModelSearchQuery        
    }): Promise<IQueryStateModelPagedQueryResult | undefined>;
}