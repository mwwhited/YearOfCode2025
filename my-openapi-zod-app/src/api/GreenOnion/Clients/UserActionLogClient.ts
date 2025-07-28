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
import type IUserActionLogClient from "../IUserActionLogClient";

// Models 
import type {
    IQueryUserActionLogModelSearchQuery,
    IQueryUserActionLogModelPagedQueryResult,
} from "../Models";

import {
    ZQueryUserActionLogModelSearchQuery,
    ZQueryUserActionLogModelPagedQueryResult,
} from "../Schema";

// Exports
export type { 
    IUserActionLogClient,

    IQueryUserActionLogModelSearchQuery,
    IQueryUserActionLogModelPagedQueryResult,
};

export default class UserActionLogClient extends ClientBase implements IUserActionLogClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
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
    async Query(params: {
        body?: IQueryUserActionLogModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryUserActionLogModelSearchQuery        
    }): Promise<IQueryUserActionLogModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/UserActionLog/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryUserActionLogModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryUserActionLogModelPagedQueryResult.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
