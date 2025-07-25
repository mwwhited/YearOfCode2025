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
import type { ISubCategoryClient } from "./ISubCategoryClient";

type integer = number;

// Models 
import { QuerySubCategoryModelSearchQuery } from "./QuerySubCategoryModelSearchQuery";
import type { IQuerySubCategoryModelSearchQuery } from "./IQuerySubCategoryModelSearchQuery";
import { QuerySubCategoryModelPagedQueryResult } from "./QuerySubCategoryModelPagedQueryResult";
import type { IQuerySubCategoryModelPagedQueryResult } from "./IQuerySubCategoryModelPagedQueryResult";
import { QuerySubCategoryModel } from "./QuerySubCategoryModel";
import type { IQuerySubCategoryModel } from "./IQuerySubCategoryModel";
import { SaveSubCategoryModel } from "./SaveSubCategoryModel";
import type { ISaveSubCategoryModel } from "./ISaveSubCategoryModel";

// Exports
export type { ISubCategoryClient };

export type { IQuerySubCategoryModelSearchQuery };
export type { IQuerySubCategoryModelPagedQueryResult };
export type { IQuerySubCategoryModel };
export type { ISaveSubCategoryModel };

export class SubCategoryClient extends ClientBase implements ISubCategoryClient  {
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
    * Query **QuerySubCategoryModel**
    *
    * @description Query **QuerySubCategoryModel**
    * @operationId SubCategory_Query
    * @tag SubCategory
    * @tag model-query
    * @path /api/SubCategory/Query
    */
    Query(params: {
        body?: IQuerySubCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QuerySubCategoryModelSearchQuery
    }): Promise<IQuerySubCategoryModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QuerySubCategoryModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/SubCategory/Query?";
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

    protected processQuery(response: Response): Promise<QuerySubCategoryModelPagedQueryResult> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QuerySubCategoryModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QuerySubCategoryModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QuerySubCategoryModel**
    *
    * @description Get **QuerySubCategoryModel**
    * @operationId SubCategory_Get
    * @tag SubCategory
    * @tag model-getter
    * @path /api/SubCategory/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQuerySubCategoryModel> {
        const { id, name,  } = params;
        let url_ = this.baseUrl + "/api/SubCategory/Get?";
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

    protected processGet(response: Response): Promise<QuerySubCategoryModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QuerySubCategoryModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QuerySubCategoryModel>(null as any);
    }
    /**
    *
    * Save **QuerySubCategoryModel**
    *
    * @description Save **QuerySubCategoryModel**
    * @operationId SubCategory_Save
    * @tag SubCategory
    * @tag model-setter
    * @path /api/SubCategory/Save
    */
    Save(params: {
        body?: ISaveSubCategoryModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveSubCategoryModel
    }): Promise<IQuerySubCategoryModel> { // #/components/schemas/GreenOnion.Common.Models.QuerySubCategoryModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/SubCategory/Save?";
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

    protected processSave(response: Response): Promise<QuerySubCategoryModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QuerySubCategoryModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QuerySubCategoryModel>(null as any);
    }
    
}
