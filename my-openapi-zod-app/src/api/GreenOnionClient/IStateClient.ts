//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryStateModelSearchQuery } from "./IQueryStateModelSearchQuery";
import type { IQueryStateModelPagedQueryResult } from "./IQueryStateModelPagedQueryResult";

export type { IQueryStateModelSearchQuery };
export type { IQueryStateModelPagedQueryResult };

type integer = number;

export interface IStateClient {

    /**
    *
    * Query **QueryStateModel**
    *
    * @description Query **QueryStateModel**
    * @operationId State_Query
    * @tag State
    * @tag model-query
    * @path /api/State/Query
    */
    Query(params: {
        body?: IQueryStateModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryStateModelSearchQuery
    }): Promise<IQueryStateModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryStateModelPagedQueryResult
    

}
