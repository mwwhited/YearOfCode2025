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
import type { ICategoryClient } from "./ICategoryClient";

type integer = number;

// Models 
import { QueryCategoryModelSearchQuery } from "./QueryCategoryModelSearchQuery";
import type { IQueryCategoryModelSearchQuery } from "./IQueryCategoryModelSearchQuery";
import { QueryCategoryModelPagedQueryResult } from "./QueryCategoryModelPagedQueryResult";
import type { IQueryCategoryModelPagedQueryResult } from "./IQueryCategoryModelPagedQueryResult";
import { QueryCategoryModel } from "./QueryCategoryModel";
import type { IQueryCategoryModel } from "./IQueryCategoryModel";
import { SaveCategoryModel } from "./SaveCategoryModel";
import type { ISaveCategoryModel } from "./ISaveCategoryModel";

// Exports
export type { ICategoryClient };

export type { IQueryCategoryModelSearchQuery };
export type { IQueryCategoryModelPagedQueryResult };
export type { IQueryCategoryModel };
export type { ISaveCategoryModel };

export class CategoryClient extends ClientBase implements ICategoryClient  {
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
    * Query **QueryCategoryModel**
    *
    * @description Query **QueryCategoryModel**
    * @operationId Category_Query
    * @tag Category
    * @tag model-query
    * @path /api/Category/Query
    */
    Query(params: {
        body?: IQueryCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryCategoryModelSearchQuery
    }): Promise<IQueryCategoryModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryCategoryModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Category/Query?";
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

    protected processQuery(response: Response): Promise<QueryCategoryModelPagedQueryResult> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryCategoryModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryCategoryModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryCategoryModel**
    *
    * @description Get **QueryCategoryModel**
    * @operationId Category_Get
    * @tag Category
    * @tag model-getter
    * @path /api/Category/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQueryCategoryModel> {
        const { id, name,  } = params;
        let url_ = this.baseUrl + "/api/Category/Get?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (name === null)
            throw new Error("The parameter 'name' cannot be null.");
        else if (name !== undefined)
            url_ += "name=" + encodeURIComponent("" + id) + "&";
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

    protected processGet(response: Response): Promise<QueryCategoryModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryCategoryModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryCategoryModel>(null as any);
    }
    /**
    *
    * Save **QueryCategoryModel**
    *
    * @description Save **QueryCategoryModel**
    * @operationId Category_Save
    * @tag Category
    * @tag model-setter
    * @path /api/Category/Save
    */
    Save(params: {
        body?: ISaveCategoryModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveCategoryModel
    }): Promise<IQueryCategoryModel> { // #/components/schemas/GreenOnion.Common.Models.QueryCategoryModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Category/Save?";
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

    protected processSave(response: Response): Promise<QueryCategoryModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryCategoryModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryCategoryModel>(null as any);
    }
    
}
