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
import type ICategoryClient from "../ICategoryClient";

// Models 
import type {
    IQueryCategoryModelSearchQuery,
    IQueryCategoryModelPagedQueryResult,
    IQueryCategoryModel,
    ISaveCategoryModel,
} from "../Models";

import {
    ZQueryCategoryModelSearchQuery,
    ZQueryCategoryModelPagedQueryResult,
    ZQueryCategoryModel,
    ZSaveCategoryModel,
} from "../Schema";

// Exports
export type { 
    ICategoryClient,

    IQueryCategoryModelSearchQuery,
    IQueryCategoryModelPagedQueryResult,
    IQueryCategoryModel,
    ISaveCategoryModel,
};

export default class CategoryClient extends ClientBase implements ICategoryClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QueryCategoryModel**
    * @description Query **QueryCategoryModel**
    * @operationId Category_Query
    * @tag Category
    * @tag model-query
    * @path /api/Category/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryCategoryModel
    */
    async Query(params: {
        body?: IQueryCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryCategoryModelSearchQuery        
    }): Promise<IQueryCategoryModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Category/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryCategoryModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryCategoryModelPagedQueryResult.parse(resultData200);
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
    * Get **QueryCategoryModel**
    * @description Get **QueryCategoryModel**
    * @operationId Category_Get
    * @tag Category
    * @tag model-getter
    * @path /api/Category/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryCategoryModel
    */
    async Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQueryCategoryModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Category/Get?";
        const { id, name,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (name === null)
            throw new Error("The parameter 'name' cannot be null.");
        else if (name !== undefined)
            url_ += "name=" + encodeURIComponent("" + id) + "&";
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

    protected async processGet(response: Response): Promise<IQueryCategoryModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryCategoryModel.parse(resultData200);
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
    * Save **QueryCategoryModel**
    * @description Save **QueryCategoryModel**
    * @operationId Category_Save
    * @tag Category
    * @tag model-setter
    * @path /api/Category/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryCategoryModel
    */
    async Save(params: {
        body?: ISaveCategoryModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveCategoryModel        
    }): Promise<IQueryCategoryModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Category/Save?";
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

    protected async processSave(response: Response): Promise<IQueryCategoryModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryCategoryModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
