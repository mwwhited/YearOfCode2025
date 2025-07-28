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
import type IIngredientClient from "../IIngredientClient";

// Models 
import type {
    IQueryIngredientModelSearchQuery,
    IQueryIngredientModelPagedQueryResult,
    IQueryIngredientModel,
    ISaveIngredientModel,
} from "../Models";

import {
    ZQueryIngredientModelSearchQuery,
    ZQueryIngredientModelPagedQueryResult,
    ZQueryIngredientModel,
    ZSaveIngredientModel,
} from "../Schema";

// Exports
export type { 
    IIngredientClient,

    IQueryIngredientModelSearchQuery,
    IQueryIngredientModelPagedQueryResult,
    IQueryIngredientModel,
    ISaveIngredientModel,
};

export default class IngredientClient extends ClientBase implements IIngredientClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QueryIngredientModel**
    * @description Query **QueryIngredientModel**
    * @operationId Ingredient_Query
    * @tag Ingredient
    * @tag model-query
    * @path /api/Ingredient/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryIngredientModel
    */
    async Query(params: {
        body?: IQueryIngredientModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryIngredientModelSearchQuery        
    }): Promise<IQueryIngredientModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Ingredient/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryIngredientModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryIngredientModelPagedQueryResult.parse(resultData200);
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
    * Get **QueryIngredientModel**
    * @description Get **QueryIngredientModel**
    * @operationId Ingredient_Get
    * @tag Ingredient
    * @tag model-getter
    * @path /api/Ingredient/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryIngredientModel
    */
    async Get(params: {
            id?: number | undefined;
            keyword?: string | undefined;
    }): Promise<IQueryIngredientModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Ingredient/Get?";
        const { id, keyword,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (keyword === null)
            throw new Error("The parameter 'keyword' cannot be null.");
        else if (keyword !== undefined)
            url_ += "keyword=" + encodeURIComponent("" + id) + "&";
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

    protected async processGet(response: Response): Promise<IQueryIngredientModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryIngredientModel.parse(resultData200);
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
    * Save **QueryIngredientModel**
    * @description Save **QueryIngredientModel**
    * @operationId Ingredient_Save
    * @tag Ingredient
    * @tag model-setter
    * @path /api/Ingredient/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryIngredientModel
    */
    async Save(params: {
        body?: ISaveIngredientModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveIngredientModel        
    }): Promise<IQueryIngredientModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Ingredient/Save?";
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

    protected async processSave(response: Response): Promise<IQueryIngredientModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryIngredientModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
