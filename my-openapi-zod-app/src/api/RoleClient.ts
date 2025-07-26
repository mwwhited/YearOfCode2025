//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

// Interface
import { ClientBase } from "./_ClientBase";
import type { IRoleClient } from "./IRoleClient";

type integer = number;

// Models 
import { QueryRoleModelSearchQuery } from "./Models/QueryRoleModelSearchQuery";
import type { IQueryRoleModelSearchQuery } from "./Models/IQueryRoleModelSearchQuery";
import { QueryRoleModelPagedQueryResult } from "./Models/QueryRoleModelPagedQueryResult";
import type { IQueryRoleModelPagedQueryResult } from "./Models/IQueryRoleModelPagedQueryResult";

// Exports
export type { IRoleClient };

export type { IQueryRoleModelSearchQuery };
export type { IQueryRoleModelPagedQueryResult };

export class RoleClient extends ClientBase implements IRoleClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

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
    }): Promise<IQueryRoleModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Role/Query?";
        url_ = url_.replace(/[?&]$/, "");
        const { body } = params;
        const content_ = JSON.stringify(body);
        const options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processQuery(_response);
        });
    }

    protected processQuery(response: Response): Promise<IQueryRoleModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryRoleModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryRoleModelPagedQueryResult | undefined>(null as any);
    }
}
