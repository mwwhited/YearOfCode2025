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
    IQueryUserActionLogModelSearchQuery,
    IQueryUserActionLogModelPagedQueryResult,
 } from "./Models";

export type { 
    IQueryUserActionLogModelSearchQuery,
    IQueryUserActionLogModelPagedQueryResult,
};

export default interface IUserActionLogClient {
    
    /**
    * Query **QueryUserActionLogModel**
    * @description Query **QueryUserActionLogModel**
    * @operationId UserActionLog_Query
    * @tag UserActionLog
    * @tag model-query
    * @path /api/UserActionLog/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryUserActionLogModel
    */
    Query(params: {
        body?: IQueryUserActionLogModelSearchQuery | undefined;
    }): Promise<IQueryUserActionLogModelPagedQueryResult | undefined>;
}