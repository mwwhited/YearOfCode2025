//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

// Interface
import { ClientBase } from "../../_ClientBase";
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
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
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
    Query(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processQuery(_response);
        });
    }

    protected processQuery(response: Response): Promise<IQueryCategoryModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryCategoryModelPagedQueryResult.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryCategoryModelPagedQueryResult | undefined>(null as any);
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
    Get(params: {
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
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<IQueryCategoryModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryCategoryModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryCategoryModel | undefined>(null as any);
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
    Save(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processSave(_response);
        });
    }

    protected processSave(response: Response): Promise<IQueryCategoryModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryCategoryModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryCategoryModel | undefined>(null as any);
    }
}
