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
        body?: IQueryStateModelSearchQuery | undefined;
    }): Promise<IQueryStateModelPagedQueryResult | undefined>;
}