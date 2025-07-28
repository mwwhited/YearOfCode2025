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
import type IManufacturerClient from "../IManufacturerClient";

// Models 
import type {
    IQueryManufacturerModelSearchQuery,
    IQueryManufacturerModelPagedQueryResult,
    IQueryManufacturerModel,
    ISaveManufacturerModel,
} from "../Models";

import {
    ZQueryManufacturerModelSearchQuery,
    ZQueryManufacturerModelPagedQueryResult,
    ZQueryManufacturerModel,
    ZSaveManufacturerModel,
} from "../Schema";

// Exports
export type { 
    IManufacturerClient,

    IQueryManufacturerModelSearchQuery,
    IQueryManufacturerModelPagedQueryResult,
    IQueryManufacturerModel,
    ISaveManufacturerModel,
};

export default class ManufacturerClient extends ClientBase implements IManufacturerClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QueryManufacturerModel**
    * @description Query **QueryManufacturerModel**
    * @operationId Manufacturer_Query
    * @tag Manufacturer
    * @tag model-query
    * @path /api/Manufacturer/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryManufacturerModel
    */
    async Query(params: {
        body?: IQueryManufacturerModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryManufacturerModelSearchQuery        
    }): Promise<IQueryManufacturerModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Manufacturer/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryManufacturerModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryManufacturerModelPagedQueryResult.parse(resultData200);
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
    * Get **QueryManufacturerModel**
    * @description Get **QueryManufacturerModel**
    * @operationId Manufacturer_Get
    * @tag Manufacturer
    * @tag model-getter
    * @path /api/Manufacturer/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryManufacturerModel
    */
    async Get(params: {
            id?: number | undefined;
            gln?: string | undefined;
    }): Promise<IQueryManufacturerModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Manufacturer/Get?";
        const { id, gln,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (gln === null)
            throw new Error("The parameter 'gln' cannot be null.");
        else if (gln !== undefined)
            url_ += "gln=" + encodeURIComponent("" + id) + "&";
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

    protected async processGet(response: Response): Promise<IQueryManufacturerModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryManufacturerModel.parse(resultData200);
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
    * Save **QueryManufacturerModel**
    * @description Save **QueryManufacturerModel**
    * @operationId Manufacturer_Save
    * @tag Manufacturer
    * @tag model-setter
    * @path /api/Manufacturer/Save 
    * @anonymous false
    * @role Super Admin
    * @role Manufacturer User
    * @querySet GreenOnion.Common.Models.QueryManufacturerModel
    */
    async Save(params: {
        body?: ISaveManufacturerModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveManufacturerModel        
    }): Promise<IQueryManufacturerModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Manufacturer/Save?";
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

    protected async processSave(response: Response): Promise<IQueryManufacturerModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryManufacturerModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
