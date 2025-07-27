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
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
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
    Query(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processQuery(_response);
        });
    }

    protected processQuery(response: Response): Promise<IQueryDefinedFilterModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryDefinedFilterModelPagedQueryResult.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryDefinedFilterModelPagedQueryResult | undefined>(null as any);
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
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
            path?: string | undefined;
    }): Promise<IQueryDefinedFilterModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DefinedFilter/Get?";
        const { id, name, path,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (name === null)
            throw new Error("The parameter 'name' cannot be null.");
        else if (name !== undefined)
            url_ += "name=" + encodeURIComponent("" + id) + "&";
        if (path === null)
            throw new Error("The parameter 'path' cannot be null.");
        else if (path !== undefined)
            url_ += "path=" + encodeURIComponent("" + id) + "&";
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

    protected processGet(response: Response): Promise<IQueryDefinedFilterModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryDefinedFilterModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryDefinedFilterModel | undefined>(null as any);
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
    Save(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processSave(_response);
        });
    }

    protected processSave(response: Response): Promise<IQueryDefinedFilterModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryDefinedFilterModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryDefinedFilterModel | undefined>(null as any);
    }
}
