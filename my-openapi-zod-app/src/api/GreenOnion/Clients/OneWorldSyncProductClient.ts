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
import type IOneWorldSyncProductClient from "../IOneWorldSyncProductClient";

// Models 
import type {
    IQueryOneWorldSyncProductModelSearchQuery,
    IQueryOneWorldSyncProductModelPagedQueryResult,
    IQueryOneWorldSyncProductModel,
    ISaveOneWorldSyncProductModel,
} from "../Models";

import {
    ZQueryOneWorldSyncProductModelSearchQuery,
    ZQueryOneWorldSyncProductModelPagedQueryResult,
    ZQueryOneWorldSyncProductModel,
    ZSaveOneWorldSyncProductModel,
} from "../Schema";

// Exports
export type { 
    IOneWorldSyncProductClient,

    IQueryOneWorldSyncProductModelSearchQuery,
    IQueryOneWorldSyncProductModelPagedQueryResult,
    IQueryOneWorldSyncProductModel,
    ISaveOneWorldSyncProductModel,
};

export default class OneWorldSyncProductClient extends ClientBase implements IOneWorldSyncProductClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * Query **QueryOneWorldSyncProductModel**
    * @description Query **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Query
    * @tag OneWorldSyncProduct
    * @tag model-query
    * @path /api/OneWorldSyncProduct/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    async Query(params: {
        body?: IQueryOneWorldSyncProductModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryOneWorldSyncProductModelSearchQuery        
    }): Promise<IQueryOneWorldSyncProductModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/OneWorldSyncProduct/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryOneWorldSyncProductModelPagedQueryResult | undefined>
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
    * Get **QueryOneWorldSyncProductModel**
    * @description Get **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Get
    * @tag OneWorldSyncProduct
    * @tag model-getter
    * @path /api/OneWorldSyncProduct/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    async Get(params: {
            id?: number | undefined;
            gtin?: string | undefined;
            upc?: string | undefined;
    }): Promise<IQueryOneWorldSyncProductModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/OneWorldSyncProduct/Get?";
        const { id, gtin, upc,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (gtin === null)
            throw new Error("The parameter 'gtin' cannot be null.");
        else if (gtin !== undefined)
            url_ += "gtin=" + encodeURIComponent("" + id) + "&";
        if (upc === null)
            throw new Error("The parameter 'upc' cannot be null.");
        else if (upc !== undefined)
            url_ += "upc=" + encodeURIComponent("" + id) + "&";
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

    protected async processGet(response: Response): Promise<IQueryOneWorldSyncProductModel | undefined>
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
    * Save **QueryOneWorldSyncProductModel**
    * @description Save **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Save
    * @tag OneWorldSyncProduct
    * @tag model-setter
    * @path /api/OneWorldSyncProduct/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    async Save(params: {
        body?: ISaveOneWorldSyncProductModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveOneWorldSyncProductModel        
    }): Promise<IQueryOneWorldSyncProductModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/OneWorldSyncProduct/Save?";
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

    protected async processSave(response: Response): Promise<IQueryOneWorldSyncProductModel | undefined>
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
