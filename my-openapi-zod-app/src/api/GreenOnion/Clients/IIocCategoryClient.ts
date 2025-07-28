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
import type IIIocCategoryClient from "../IIIocCategoryClient";

// Models 
import type {
    IQueryIocCategoryModelSearchQuery,
    IQueryIocCategoryModelPagedQueryResult,
} from "../Models";

import {
    ZQueryIocCategoryModelSearchQuery,
    ZQueryIocCategoryModelPagedQueryResult,
} from "../Schema";

// Exports
export type { 
    IIIocCategoryClient,

    IQueryIocCategoryModelSearchQuery,
    IQueryIocCategoryModelPagedQueryResult,
};

export default class IIocCategoryClient extends ClientBase implements IIIocCategoryClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QueryIocCategoryModel**
    * @description Query **QueryIocCategoryModel**
    * @operationId IIocCategory_Query
    * @tag IIocCategory
    * @tag model-query
    * @path /api/IIocCategory/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryIocCategoryModel
    */
    async Query(params: {
        body?: IQueryIocCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryIocCategoryModelSearchQuery        
    }): Promise<IQueryIocCategoryModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/IIocCategory/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryIocCategoryModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryIocCategoryModelPagedQueryResult.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
