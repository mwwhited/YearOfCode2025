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
import type IAllergenClient from "../IAllergenClient";

// Models 
import type {
    IQueryAllergenModelSearchQuery,
    IQueryAllergenModelPagedQueryResult,
    IQueryAllergenModel,
    ISaveAllergenModel,
} from "../Models";

import {
    ZQueryAllergenModelSearchQuery,
    ZQueryAllergenModelPagedQueryResult,
    ZQueryAllergenModel,
    ZSaveAllergenModel,
} from "../Schema";

// Exports
export type { 
    IAllergenClient,

    IQueryAllergenModelSearchQuery,
    IQueryAllergenModelPagedQueryResult,
    IQueryAllergenModel,
    ISaveAllergenModel,
};

export default class AllergenClient extends ClientBase implements IAllergenClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QueryAllergenModel**
    * @description Query **QueryAllergenModel**
    * @operationId Allergen_Query
    * @tag Allergen
    * @tag model-query
    * @path /api/Allergen/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */
    async Query(params: {
        body?: IQueryAllergenModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModelSearchQuery        
    }): Promise<IQueryAllergenModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Allergen/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryAllergenModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryAllergenModelPagedQueryResult.parse(resultData200);
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
    * Get **QueryAllergenModel**
    * @description Get **QueryAllergenModel**
    * @operationId Allergen_Get
    * @tag Allergen
    * @tag model-getter
    * @path /api/Allergen/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */
    async Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQueryAllergenModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Allergen/Get?";
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

    protected async processGet(response: Response): Promise<IQueryAllergenModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryAllergenModel.parse(resultData200);
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
    * Save **QueryAllergenModel**
    * @description Save **QueryAllergenModel**
    * @operationId Allergen_Save
    * @tag Allergen
    * @tag model-setter
    * @path /api/Allergen/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */
    async Save(params: {
        body?: ISaveAllergenModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveAllergenModel        
    }): Promise<IQueryAllergenModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Allergen/Save?";
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

    protected async processSave(response: Response): Promise<IQueryAllergenModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryAllergenModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
