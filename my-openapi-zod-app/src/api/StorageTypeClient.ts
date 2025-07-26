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
import type { IStorageTypeClient } from "./IStorageTypeClient";

type integer = number;

// Models 
import { QueryStorageTypeModelSearchQuery } from "./Models/QueryStorageTypeModelSearchQuery";
import type { IQueryStorageTypeModelSearchQuery } from "./Models/IQueryStorageTypeModelSearchQuery";
import { QueryStorageTypeModelPagedQueryResult } from "./Models/QueryStorageTypeModelPagedQueryResult";
import type { IQueryStorageTypeModelPagedQueryResult } from "./Models/IQueryStorageTypeModelPagedQueryResult";
import { QueryStorageTypeModel } from "./Models/QueryStorageTypeModel";
import type { IQueryStorageTypeModel } from "./Models/IQueryStorageTypeModel";
import { SaveStorageTypeModel } from "./Models/SaveStorageTypeModel";
import type { ISaveStorageTypeModel } from "./Models/ISaveStorageTypeModel";

// Exports
export type { IStorageTypeClient };

export type { IQueryStorageTypeModelSearchQuery };
export type { IQueryStorageTypeModelPagedQueryResult };
export type { IQueryStorageTypeModel };
export type { ISaveStorageTypeModel };

export class StorageTypeClient extends ClientBase implements IStorageTypeClient  {
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
    * Query **QueryStorageTypeModel**
    *
    * @description Query **QueryStorageTypeModel**
    * @operationId StorageType_Query
    * @tag StorageType
    * @tag model-query
    * @path /api/StorageType/Query
    */
    Query(params: {
        body?: IQueryStorageTypeModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryStorageTypeModelSearchQuery
    }): Promise<IQueryStorageTypeModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryStorageTypeModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/StorageType/Query?";
        url_ = url_.replace(/[?&]$/, "");

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

    protected processQuery(response: Response): Promise<QueryStorageTypeModelPagedQueryResult> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryStorageTypeModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryStorageTypeModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryStorageTypeModel**
    *
    * @description Get **QueryStorageTypeModel**
    * @operationId StorageType_Get
    * @tag StorageType
    * @tag model-getter
    * @path /api/StorageType/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQueryStorageTypeModel> {
        const { id, name,  } = params;
        let url_ = this.baseUrl + "/api/StorageType/Get?";
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

    protected processGet(response: Response): Promise<QueryStorageTypeModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryStorageTypeModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryStorageTypeModel>(null as any);
    }
    /**
    *
    * Save **QueryStorageTypeModel**
    *
    * @description Save **QueryStorageTypeModel**
    * @operationId StorageType_Save
    * @tag StorageType
    * @tag model-setter
    * @path /api/StorageType/Save
    */
    Save(params: {
        body?: ISaveStorageTypeModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveStorageTypeModel
    }): Promise<IQueryStorageTypeModel> { // #/components/schemas/GreenOnion.Common.Models.QueryStorageTypeModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/StorageType/Save?";
        url_ = url_.replace(/[?&]$/, "");

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

    protected processSave(response: Response): Promise<QueryStorageTypeModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryStorageTypeModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryStorageTypeModel>(null as any);
    }
    
}
