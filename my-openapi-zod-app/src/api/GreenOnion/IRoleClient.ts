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
    IQueryRoleModelSearchQuery,
    IQueryRoleModelPagedQueryResult,
 } from "./Models";
 
export type {
    IQueryRoleModelSearchQuery,
    IQueryRoleModelPagedQueryResult,
 };

export default interface IRoleClient {
    /**
    * Query **QueryRoleModel**
    * @description Query **QueryRoleModel**
    * @operationId Role_Query
    * @tag Role
    * @tag model-query
    * @path /api/Role/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryRoleModel
    */
    Query(params: {
        body?: IQueryRoleModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryRoleModelSearchQuery        
    }): Promise<IQueryRoleModelPagedQueryResult | undefined>;
}