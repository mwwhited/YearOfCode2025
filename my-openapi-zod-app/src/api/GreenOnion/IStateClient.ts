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
    IQueryStateModelSearchQuery,
    IQueryStateModelPagedQueryResult,
 } from "./Models";
 
export type {
    IQueryStateModelSearchQuery,
    IQueryStateModelPagedQueryResult,
 };

export default interface IStateClient {
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