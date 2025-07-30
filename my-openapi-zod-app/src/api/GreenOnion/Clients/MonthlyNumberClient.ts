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
import type IMonthlyNumberClient from "../IMonthlyNumberClient";

// Models 
import type {
    IQueryMonthlyNumberModelSearchQuery,
    IQueryMonthlyNumberModelPagedQueryResult,
    IQueryMonthlyNumberModel,
    ISaveMonthlyNumberModel,
} from "../Models";

import {
    ZQueryMonthlyNumberModelSearchQuery,
    ZQueryMonthlyNumberModelPagedQueryResult,
    ZQueryMonthlyNumberModel,
    ZSaveMonthlyNumberModel,
} from "../Schema";

// Exports
export type { 
    IMonthlyNumberClient,

    IQueryMonthlyNumberModelSearchQuery,
    IQueryMonthlyNumberModelPagedQueryResult,
    IQueryMonthlyNumberModel,
    ISaveMonthlyNumberModel,
};

export default class MonthlyNumberClient extends ClientBase implements IMonthlyNumberClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QueryMonthlyNumberModel**
    * @description Query **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Query
    * @tag MonthlyNumber
    * @tag model-query
    * @path /api/MonthlyNumber/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    async Query(params: {
        body?: IQueryMonthlyNumberModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryMonthlyNumberModelSearchQuery        
    }): Promise<IQueryMonthlyNumberModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/MonthlyNumber/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryMonthlyNumberModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryMonthlyNumberModelPagedQueryResult.parse(resultData200);
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
    * Get **QueryMonthlyNumberModel**
    * @description Get **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Get
    * @tag MonthlyNumber
    * @tag model-getter
    * @path /api/MonthlyNumber/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    async Get(params: {
            id?: number | undefined;
            schoolDistrictId?: number | undefined;
            year?: string | undefined;
    }): Promise<IQueryMonthlyNumberModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/MonthlyNumber/Get?";
        const { id, schoolDistrictId, year,  } = params;
        if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (schoolDistrictId !== undefined)
            url_ += "schoolDistrictId=" + encodeURIComponent("" + schoolDistrictId) + "&";
        if (year !== undefined)
            url_ += "year=" + encodeURIComponent("" + year) + "&";
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

    protected async processGet(response: Response): Promise<IQueryMonthlyNumberModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryMonthlyNumberModel.parse(resultData200);
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
    * Save **QueryMonthlyNumberModel**
    * @description Save **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Save
    * @tag MonthlyNumber
    * @tag model-setter
    * @path /api/MonthlyNumber/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    async Save(params: {
        body?: ISaveMonthlyNumberModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveMonthlyNumberModel        
    }): Promise<IQueryMonthlyNumberModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/MonthlyNumber/Save?";
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

    protected async processSave(response: Response): Promise<IQueryMonthlyNumberModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryMonthlyNumberModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
