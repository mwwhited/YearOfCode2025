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
import type { IDistributorClient } from "./IDistributorClient";

type integer = number;

// Models 
import { QueryDistributorModelSearchQuery } from "./Models/QueryDistributorModelSearchQuery";
import type { IQueryDistributorModelSearchQuery } from "./Models/IQueryDistributorModelSearchQuery";
import { QueryDistributorModelPagedQueryResult } from "./Models/QueryDistributorModelPagedQueryResult";
import type { IQueryDistributorModelPagedQueryResult } from "./Models/IQueryDistributorModelPagedQueryResult";
import { QueryDistributorModel } from "./Models/QueryDistributorModel";
import type { IQueryDistributorModel } from "./Models/IQueryDistributorModel";
import { SaveDistributorModel } from "./Models/SaveDistributorModel";
import type { ISaveDistributorModel } from "./Models/ISaveDistributorModel";

// Exports
export type { IDistributorClient };

export type { IQueryDistributorModelSearchQuery };
export type { IQueryDistributorModelPagedQueryResult };
export type { IQueryDistributorModel };
export type { ISaveDistributorModel };

export class DistributorClient extends ClientBase implements IDistributorClient  {
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
    * Query **QueryDistributorModel**
    *
    * @description Query **QueryDistributorModel**
    * @operationId Distributor_Query
    * @tag Distributor
    * @tag model-query
    * @path /api/Distributor/Query
    */
    Query(params: {
        body?: IQueryDistributorModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryDistributorModelSearchQuery
    }): Promise<IQueryDistributorModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryDistributorModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Distributor/Query?";
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

    protected processQuery(response: Response): Promise<QueryDistributorModelPagedQueryResult> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryDistributorModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryDistributorModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryDistributorModel**
    *
    * @description Get **QueryDistributorModel**
    * @operationId Distributor_Get
    * @tag Distributor
    * @tag model-getter
    * @path /api/Distributor/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQueryDistributorModel> {
        const { id, name,  } = params;
        let url_ = this.baseUrl + "/api/Distributor/Get?";
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

    protected processGet(response: Response): Promise<QueryDistributorModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryDistributorModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryDistributorModel>(null as any);
    }
    /**
    *
    * Save **QueryDistributorModel**
    *
    * @description Save **QueryDistributorModel**
    * @operationId Distributor_Save
    * @tag Distributor
    * @tag model-setter
    * @path /api/Distributor/Save
    */
    Save(params: {
        body?: ISaveDistributorModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveDistributorModel
    }): Promise<IQueryDistributorModel> { // #/components/schemas/GreenOnion.Common.Models.QueryDistributorModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Distributor/Save?";
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

    protected processSave(response: Response): Promise<QueryDistributorModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryDistributorModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryDistributorModel>(null as any);
    }
    
}
