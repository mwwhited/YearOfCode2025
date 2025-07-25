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
import type { IAllergenClient } from "./IAllergenClient";

type integer = number;

// Models 
import { QueryAllergenModelSearchQuery } from "./QueryAllergenModelSearchQuery";
import type { IQueryAllergenModelSearchQuery } from "./IQueryAllergenModelSearchQuery";
import { QueryAllergenModelPagedQueryResult } from "./QueryAllergenModelPagedQueryResult";
import type { IQueryAllergenModelPagedQueryResult } from "./IQueryAllergenModelPagedQueryResult";
import { QueryAllergenModel } from "./QueryAllergenModel";
import type { IQueryAllergenModel } from "./IQueryAllergenModel";
import { SaveAllergenModel } from "./SaveAllergenModel";
import type { ISaveAllergenModel } from "./ISaveAllergenModel";

// Exports
export type { IAllergenClient };

export type { IQueryAllergenModelSearchQuery };
export type { IQueryAllergenModelPagedQueryResult };
export type { IQueryAllergenModel };
export type { ISaveAllergenModel };

export class AllergenClient extends ClientBase implements IAllergenClient  {
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
    * Query **QueryAllergenModel**
    *
    * @description Query **QueryAllergenModel**
    * @operationId Allergen_Query
    * @tag Allergen
    * @tag model-query
    * @path /api/Allergen/Query
    */
    Query(params: {
        body?: IQueryAllergenModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModelSearchQuery
    }): Promise<IQueryAllergenModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Allergen/Query?";
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

    protected processQuery(response: Response): Promise<QueryAllergenModelPagedQueryResult> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryAllergenModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryAllergenModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryAllergenModel**
    *
    * @description Get **QueryAllergenModel**
    * @operationId Allergen_Get
    * @tag Allergen
    * @tag model-getter
    * @path /api/Allergen/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQueryAllergenModel> {
        const { id, name,  } = params;
        let url_ = this.baseUrl + "/api/Allergen/Get?";
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

    protected processGet(response: Response): Promise<QueryAllergenModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryAllergenModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryAllergenModel>(null as any);
    }
    /**
    *
    * Save **QueryAllergenModel**
    *
    * @description Save **QueryAllergenModel**
    * @operationId Allergen_Save
    * @tag Allergen
    * @tag model-setter
    * @path /api/Allergen/Save
    */
    Save(params: {
        body?: ISaveAllergenModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveAllergenModel
    }): Promise<IQueryAllergenModel> { // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Allergen/Save?";
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

    protected processSave(response: Response): Promise<QueryAllergenModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryAllergenModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryAllergenModel>(null as any);
    }
    
}
