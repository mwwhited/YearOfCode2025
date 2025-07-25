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
import type { IManufacturerClient } from "./IManufacturerClient";

type integer = number;

// Models 
import { QueryManufacturerModelSearchQuery } from "./QueryManufacturerModelSearchQuery";
import type { IQueryManufacturerModelSearchQuery } from "./IQueryManufacturerModelSearchQuery";
import { QueryManufacturerModelPagedQueryResult } from "./QueryManufacturerModelPagedQueryResult";
import type { IQueryManufacturerModelPagedQueryResult } from "./IQueryManufacturerModelPagedQueryResult";
import { QueryManufacturerModel } from "./QueryManufacturerModel";
import type { IQueryManufacturerModel } from "./IQueryManufacturerModel";
import { SaveManufacturerModel } from "./SaveManufacturerModel";
import type { ISaveManufacturerModel } from "./ISaveManufacturerModel";

// Exports
export type { IManufacturerClient };

export type { IQueryManufacturerModelSearchQuery };
export type { IQueryManufacturerModelPagedQueryResult };
export type { IQueryManufacturerModel };
export type { ISaveManufacturerModel };

export class ManufacturerClient extends ClientBase implements IManufacturerClient  {
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
    * Query **QueryManufacturerModel**
    *
    * @description Query **QueryManufacturerModel**
    * @operationId Manufacturer_Query
    * @tag Manufacturer
    * @tag model-query
    * @path /api/Manufacturer/Query
    */
    Query(params: {
        body?: IQueryManufacturerModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryManufacturerModelSearchQuery
    }): Promise<IQueryManufacturerModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryManufacturerModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Manufacturer/Query?";
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

    protected processQuery(response: Response): Promise<QueryManufacturerModelPagedQueryResult> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryManufacturerModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryManufacturerModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryManufacturerModel**
    *
    * @description Get **QueryManufacturerModel**
    * @operationId Manufacturer_Get
    * @tag Manufacturer
    * @tag model-getter
    * @path /api/Manufacturer/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            gln?: string | undefined; // 
    }): Promise<IQueryManufacturerModel> {
        const { id, gln,  } = params;
        let url_ = this.baseUrl + "/api/Manufacturer/Get?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (gln === null)
            throw new Error("The parameter 'gln' cannot be null.");
        else if (gln !== undefined)
            url_ += "gln=" + encodeURIComponent("" + id) + "&";
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

    protected processGet(response: Response): Promise<QueryManufacturerModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryManufacturerModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryManufacturerModel>(null as any);
    }
    /**
    *
    * Save **QueryManufacturerModel**
    *
    * @description Save **QueryManufacturerModel**
    * @operationId Manufacturer_Save
    * @tag Manufacturer
    * @tag model-setter
    * @path /api/Manufacturer/Save
    */
    Save(params: {
        body?: ISaveManufacturerModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveManufacturerModel
    }): Promise<IQueryManufacturerModel> { // #/components/schemas/GreenOnion.Common.Models.QueryManufacturerModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Manufacturer/Save?";
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

    protected processSave(response: Response): Promise<QueryManufacturerModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryManufacturerModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryManufacturerModel>(null as any);
    }
    
}
