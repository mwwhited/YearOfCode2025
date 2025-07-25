//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Interface
import { ClientBase } from "./_ClientBase";
import type { IDefinedFilterClient } from "./IDefinedFilterClient";

type integer = number;

// Models 
import { QueryDefinedFilterModelSearchQuery } from "./QueryDefinedFilterModelSearchQuery";
import type { IQueryDefinedFilterModelSearchQuery } from "./IQueryDefinedFilterModelSearchQuery";
import { QueryDefinedFilterModelPagedQueryResult } from "./QueryDefinedFilterModelPagedQueryResult";
import type { IQueryDefinedFilterModelPagedQueryResult } from "./IQueryDefinedFilterModelPagedQueryResult";
import { QueryDefinedFilterModel } from "./QueryDefinedFilterModel";
import type { IQueryDefinedFilterModel } from "./IQueryDefinedFilterModel";
import { SaveDefinedFilterModel } from "./SaveDefinedFilterModel";
import type { ISaveDefinedFilterModel } from "./ISaveDefinedFilterModel";

// Exports
export type { IDefinedFilterClient };

export type { IQueryDefinedFilterModelSearchQuery };
export type { IQueryDefinedFilterModelPagedQueryResult };
export type { IQueryDefinedFilterModel };
export type { ISaveDefinedFilterModel };

export class DefinedFilterClient extends ClientBase implements IDefinedFilterClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    *
    * Query **QueryDefinedFilterModel**
    *
    * @description Query **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Query
    * @tag DefinedFilter
    * @tag model-query
    * @path /api/DefinedFilter/Query
    */
    Query(params: {
        body?: IQueryDefinedFilterModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryDefinedFilterModelSearchQuery
    }): Promise<IQueryDefinedFilterModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryDefinedFilterModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/DefinedFilter/Query?";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
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

    protected processQuery(response: Response): Promise<QueryDefinedFilterModelPagedQueryResult> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryDefinedFilterModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryDefinedFilterModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryDefinedFilterModel**
    *
    * @description Get **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Get
    * @tag DefinedFilter
    * @tag model-getter
    * @path /api/DefinedFilter/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
            path?: string | undefined; // 
    }): Promise<IQueryDefinedFilterModel> {
        const { id, name, path,  } = params;
        let url_ = this.baseUrl + "/api/DefinedFilter/Get?";
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

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<QueryDefinedFilterModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryDefinedFilterModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryDefinedFilterModel>(null as any);
    }
    /**
    *
    * Save **QueryDefinedFilterModel**
    *
    * @description Save **QueryDefinedFilterModel**
    * @operationId DefinedFilter_Save
    * @tag DefinedFilter
    * @tag model-setter
    * @path /api/DefinedFilter/Save
    */
    Save(params: {
        body?: ISaveDefinedFilterModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveDefinedFilterModel
    }): Promise<IQueryDefinedFilterModel> { // #/components/schemas/GreenOnion.Common.Models.QueryDefinedFilterModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/DefinedFilter/Save?";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
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

    protected processSave(response: Response): Promise<QueryDefinedFilterModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryDefinedFilterModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryDefinedFilterModel>(null as any);
    }
    
}
