//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

// Interface
import { ClientBase, ApiException } from "../../_ClientBase";
export { ApiException };
import type ISchoolDistrictClient from "../ISchoolDistrictClient";

// Models 
import type {
    IQuerySchoolDistrictModelSearchQuery,
    IQuerySchoolDistrictModelPagedQueryResult,
    IQuerySchoolDistrictModel,
    ISaveSchoolDistrictModel,
} from "../Models";

import {
    ZQuerySchoolDistrictModelSearchQuery,
    ZQuerySchoolDistrictModelPagedQueryResult,
    ZQuerySchoolDistrictModel,
    ZSaveSchoolDistrictModel,
} from "../Schema";

// Exports
export type { 
    ISchoolDistrictClient,

    IQuerySchoolDistrictModelSearchQuery,
    IQuerySchoolDistrictModelPagedQueryResult,
    IQuerySchoolDistrictModel,
    ISaveSchoolDistrictModel,
};

export default class SchoolDistrictClient extends ClientBase implements ISchoolDistrictClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * Query **QuerySchoolDistrictModel**
    * @description Query **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Query
    * @tag SchoolDistrict
    * @tag model-query
    * @path /api/SchoolDistrict/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */
    async Query(params: {
        body?: IQuerySchoolDistrictModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QuerySchoolDistrictModelSearchQuery        
    }): Promise<IQuerySchoolDistrictModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SchoolDistrict/Query?";
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

    protected async processQuery(response: Response): Promise<IQuerySchoolDistrictModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            let result200: unknown = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = JSON.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return JSON.parse(resultData200);
            }
        }
    }
    /**
    * Get **QuerySchoolDistrictModel**
    * @description Get **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Get
    * @tag SchoolDistrict
    * @tag model-getter
    * @path /api/SchoolDistrict/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */
    async Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQuerySchoolDistrictModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SchoolDistrict/Get?";
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

    protected async processGet(response: Response): Promise<IQuerySchoolDistrictModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            let result200: unknown = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = JSON.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return JSON.parse(resultData200);
            }
        }
    }
    /**
    * Save **QuerySchoolDistrictModel**
    * @description Save **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Save
    * @tag SchoolDistrict
    * @tag model-setter
    * @path /api/SchoolDistrict/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */
    async Save(params: {
        body?: ISaveSchoolDistrictModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveSchoolDistrictModel        
    }): Promise<IQuerySchoolDistrictModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SchoolDistrict/Save?";
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

    protected async processSave(response: Response): Promise<IQuerySchoolDistrictModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            let result200: unknown = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = JSON.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return JSON.parse(resultData200);
            }
        }
    }
}
