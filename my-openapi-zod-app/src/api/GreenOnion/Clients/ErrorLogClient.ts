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
import type IErrorLogClient from "../IErrorLogClient";

// Models 
import type {
    IQueryErrorLogModelSearchQuery,
    IQueryErrorLogModelPagedQueryResult,
} from "../Models";

import {
    ZQueryErrorLogModelSearchQuery,
    ZQueryErrorLogModelPagedQueryResult,
} from "../Schema";

// Exports
export type { 
    IErrorLogClient,
    IQueryErrorLogModelSearchQuery,
    IQueryErrorLogModelPagedQueryResult,
};

export default class ErrorLogClient extends ClientBase implements IErrorLogClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
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
    async Query(params: {
        body?: IQueryErrorLogModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryErrorLogModelSearchQuery        
    }): Promise<IQueryErrorLogModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/ErrorLog/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryErrorLogModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryErrorLogModelPagedQueryResult.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
