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
import type ISubCategoryClient from "../ISubCategoryClient";

// Models 
import type {
    IQuerySubCategoryModelSearchQuery,
    IQuerySubCategoryModelPagedQueryResult,
    IQuerySubCategoryModel,
    ISaveSubCategoryModel,
} from "../Models";

import {
    ZQuerySubCategoryModelSearchQuery,
    ZQuerySubCategoryModelPagedQueryResult,
    ZQuerySubCategoryModel,
    ZSaveSubCategoryModel,
} from "../Schema";

// Exports
export type { 
    ISubCategoryClient,

    IQuerySubCategoryModelSearchQuery,
    IQuerySubCategoryModelPagedQueryResult,
    IQuerySubCategoryModel,
    ISaveSubCategoryModel,
};

export default class SubCategoryClient extends ClientBase implements ISubCategoryClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QuerySubCategoryModel**
    * @description Query **QuerySubCategoryModel**
    * @operationId SubCategory_Query
    * @tag SubCategory
    * @tag model-query
    * @path /api/SubCategory/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySubCategoryModel
    */
    async Query(params: {
        body?: IQuerySubCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QuerySubCategoryModelSearchQuery        
    }): Promise<IQuerySubCategoryModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SubCategory/Query?";
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

    protected async processQuery(response: Response): Promise<IQuerySubCategoryModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQuerySubCategoryModelPagedQueryResult.parse(resultData200);
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
    * Get **QuerySubCategoryModel**
    * @description Get **QuerySubCategoryModel**
    * @operationId SubCategory_Get
    * @tag SubCategory
    * @tag model-getter
    * @path /api/SubCategory/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySubCategoryModel
    */
    async Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQuerySubCategoryModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SubCategory/Get?";
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
            method: "POST",
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

    protected async processGet(response: Response): Promise<IQuerySubCategoryModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQuerySubCategoryModel.parse(resultData200);
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
    * Save **QuerySubCategoryModel**
    * @description Save **QuerySubCategoryModel**
    * @operationId SubCategory_Save
    * @tag SubCategory
    * @tag model-setter
    * @path /api/SubCategory/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QuerySubCategoryModel
    */
    async Save(params: {
        body?: ISaveSubCategoryModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveSubCategoryModel        
    }): Promise<IQuerySubCategoryModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SubCategory/Save?";
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

    protected async processSave(response: Response): Promise<IQuerySubCategoryModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQuerySubCategoryModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
