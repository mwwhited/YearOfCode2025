//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

// Interface
import { ClientBase, ApiException } from "../../_ClientBase";
export { ApiException };
import type IRoleClient from "../IRoleClient";

// Models 
import type {
    IQueryRoleModelSearchQuery,
    IQueryRoleModelPagedQueryResult,
} from "../Models";

import {
    ZQueryRoleModelSearchQuery,
    ZQueryRoleModelPagedQueryResult,
} from "../Schema";

// Exports
export type { 
    IRoleClient,
    IQueryRoleModelSearchQuery,
    IQueryRoleModelPagedQueryResult,
};

export default class RoleClient extends ClientBase implements IRoleClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
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
    async Query(params: {
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

        const transformedOptions = await this.transformOptions(options_);
        const response = await  this.http.fetch(url_, transformedOptions);
        const processed = await this.processQuery(response);
        return processed;
    }

    protected async processQuery(response: Response): Promise<IQueryRoleModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryRoleModelPagedQueryResult.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
