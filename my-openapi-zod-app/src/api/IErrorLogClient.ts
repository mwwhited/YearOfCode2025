//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryErrorLogModelSearchQuery } from "./Models/IQueryErrorLogModelSearchQuery";
import type { IQueryErrorLogModelPagedQueryResult } from "./Models/IQueryErrorLogModelPagedQueryResult";

export type { IQueryErrorLogModelSearchQuery };
export type { IQueryErrorLogModelPagedQueryResult };

type integer = number;

export interface IErrorLogClient {

    /**
    *
    * Query **QueryErrorLogModel**
    *
    * @description Query **QueryErrorLogModel**
    * @operationId ErrorLog_Query
    * @tag ErrorLog
    * @tag model-query
    * @path /api/ErrorLog/Query
    */
    Query(params: {
        body?: IQueryErrorLogModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryErrorLogModelSearchQuery
    }): Promise<IQueryErrorLogModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryErrorLogModelPagedQueryResult
    

}
