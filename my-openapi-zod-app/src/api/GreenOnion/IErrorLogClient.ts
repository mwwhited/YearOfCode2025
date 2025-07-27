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
    IQueryErrorLogModelSearchQuery,
    IQueryErrorLogModelPagedQueryResult,
 } from "./Models";
 
export type {
    IQueryErrorLogModelSearchQuery,
    IQueryErrorLogModelPagedQueryResult,
 };

export default interface IErrorLogClient {
    /**
    * Query **QueryErrorLogModel**
    * @description Query **QueryErrorLogModel**
    * @operationId ErrorLog_Query
    * @tag ErrorLog
    * @tag model-query
    * @path /api/ErrorLog/Query 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryErrorLogModel
    */
    Query(params: {
        body?: IQueryErrorLogModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryErrorLogModelSearchQuery        
    }): Promise<IQueryErrorLogModelPagedQueryResult | undefined>;
}