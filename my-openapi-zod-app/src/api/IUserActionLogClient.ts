//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryUserActionLogModelSearchQuery } from "./Models/IQueryUserActionLogModelSearchQuery";
import type { IQueryUserActionLogModelPagedQueryResult } from "./Models/IQueryUserActionLogModelPagedQueryResult";

export type { IQueryUserActionLogModelSearchQuery };
export type { IQueryUserActionLogModelPagedQueryResult };

type integer = number;

export interface IUserActionLogClient {

    /**
    *
    * Query **QueryUserActionLogModel**
    *
    * @description Query **QueryUserActionLogModel**
    * @operationId UserActionLog_Query
    * @tag UserActionLog
    * @tag model-query
    * @path /api/UserActionLog/Query
    */
    Query(params: {
        body?: IQueryUserActionLogModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryUserActionLogModelSearchQuery
    }): Promise<IQueryUserActionLogModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryUserActionLogModelPagedQueryResult
    

}
