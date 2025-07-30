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
import type IDefinedFilterClient from "../IDefinedFilterClient";

// Models 
import type {
    IQueryDefinedFilterModelSearchQuery,
    IQueryDefinedFilterModelPagedQueryResult,
    IQueryDefinedFilterModel,
    ISaveDefinedFilterModel,
} from "../Models";

import {
    ZQueryDefinedFilterModelSearchQuery,
    ZQueryDefinedFilterModelPagedQueryResult,
    ZQueryDefinedFilterModel,
    ZSaveDefinedFilterModel,
} from "../Schema";

// Exports
export type { 
    IDefinedFilterClient,
    IQueryDefinedFilterModelSearchQuery,
    IQueryDefinedFilterModelPagedQueryResult,
    IQueryDefinedFilterModel,
    ISaveDefinedFilterModel,
};

export default class DefinedFilterClient extends ClientBase implements IDefinedFilterClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QueryDefinedFilterModel**
    * @description Query **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Query
    * @tag DefinedFilter
    * @tag model-query
    * @path /api/DefinedFilter/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryDefinedFilterModel
    */
    async Query(params: {
        body?: IQueryDefinedFilterModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryDefinedFilterModelSearchQuery        
    }): Promise<IQueryDefinedFilterModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DefinedFilter/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryDefinedFilterModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryDefinedFilterModelPagedQueryResult.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }    
    /**
    * Get **QueryDefinedFilterModel**
    * @description Get **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Get
    * @tag DefinedFilter
    * @tag model-getter
    * @path /api/DefinedFilter/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryDefinedFilterModel
    */
    async Get(params: {
            id?: number | undefined;
            name?: string | undefined;
            path?: string | undefined;
    }): Promise<IQueryDefinedFilterModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DefinedFilter/Get?";
        const { id, name, path,  } = params;
        if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (name !== undefined)
            url_ += "name=" + encodeURIComponent("" + name) + "&";
        if (path !== undefined)
            url_ += "path=" + encodeURIComponent("" + path) + "&";
        url_ = url_.replace(/[?&]$/, "");
        const options_: RequestInit = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        const transformedOptions = await this.transformOptions(options_);
        const response = await  this.http.fetch(url_, transformedOptions);
        const processed = await this.processGet(response);
        return processed;
    }

    protected async processGet(response: Response): Promise<IQueryDefinedFilterModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryDefinedFilterModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }
    
    /**
    * Save **QueryDefinedFilterModel**
    * @description Save **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Save
    * @tag DefinedFilter
    * @tag model-setter
    * @path /api/DefinedFilter/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryDefinedFilterModel
    */
    async Save(params: {
        body?: ISaveDefinedFilterModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveDefinedFilterModel        
    }): Promise<IQueryDefinedFilterModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DefinedFilter/Save?";
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
        const processed = await this.processSave(response);
        return processed;
    }

    protected async processSave(response: Response): Promise<IQueryDefinedFilterModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryDefinedFilterModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
