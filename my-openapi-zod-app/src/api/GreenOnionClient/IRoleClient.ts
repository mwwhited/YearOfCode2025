//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryRoleModelSearchQuery } from "./IQueryRoleModelSearchQuery";
import type { IQueryRoleModelPagedQueryResult } from "./IQueryRoleModelPagedQueryResult";

export type { IQueryRoleModelSearchQuery };
export type { IQueryRoleModelPagedQueryResult };

type integer = number;

export interface IRoleClient {

    /**
    *
    * Query **QueryRoleModel**
    *
    * @description Query **QueryRoleModel**
    * @operationId Role_Query
    * @tag Role
    * @tag model-query
    * @path /api/Role/Query
    */
    Query(params: {
        body?: IQueryRoleModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryRoleModelSearchQuery
    }): Promise<IQueryRoleModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryRoleModelPagedQueryResult
    

}
