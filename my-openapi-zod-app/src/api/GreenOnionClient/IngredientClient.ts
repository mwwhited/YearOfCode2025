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
import type { IIngredientClient } from "./IIngredientClient";

type integer = number;

// Models 
import { QueryIngredientModelSearchQuery } from "./Models/QueryIngredientModelSearchQuery";
import type { IQueryIngredientModelSearchQuery } from "./Models/IQueryIngredientModelSearchQuery";
import { QueryIngredientModelPagedQueryResult } from "./Models/QueryIngredientModelPagedQueryResult";
import type { IQueryIngredientModelPagedQueryResult } from "./Models/IQueryIngredientModelPagedQueryResult";
import { QueryIngredientModel } from "./Models/QueryIngredientModel";
import type { IQueryIngredientModel } from "./Models/IQueryIngredientModel";
import { SaveIngredientModel } from "./Models/SaveIngredientModel";
import type { ISaveIngredientModel } from "./Models/ISaveIngredientModel";

// Exports
export type { IIngredientClient };

export type { IQueryIngredientModelSearchQuery };
export type { IQueryIngredientModelPagedQueryResult };
export type { IQueryIngredientModel };
export type { ISaveIngredientModel };

export class IngredientClient extends ClientBase implements IIngredientClient  {
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
    * Query **QueryIngredientModel**
    *
    * @description Query **QueryIngredientModel**
    * @operationId Ingredient_Query
    * @tag Ingredient
    * @tag model-query
    * @path /api/Ingredient/Query
    */
    Query(params: {
        body?: IQueryIngredientModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryIngredientModelSearchQuery
    }): Promise<IQueryIngredientModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryIngredientModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Ingredient/Query?";
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

    protected processQuery(response: Response): Promise<QueryIngredientModelPagedQueryResult> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryIngredientModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryIngredientModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryIngredientModel**
    *
    * @description Get **QueryIngredientModel**
    * @operationId Ingredient_Get
    * @tag Ingredient
    * @tag model-getter
    * @path /api/Ingredient/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            keyword?: string | undefined; // 
    }): Promise<IQueryIngredientModel> {
        const { id, keyword,  } = params;
        let url_ = this.baseUrl + "/api/Ingredient/Get?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (keyword === null)
            throw new Error("The parameter 'keyword' cannot be null.");
        else if (keyword !== undefined)
            url_ += "keyword=" + encodeURIComponent("" + id) + "&";
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

    protected processGet(response: Response): Promise<QueryIngredientModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryIngredientModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryIngredientModel>(null as any);
    }
    /**
    *
    * Save **QueryIngredientModel**
    *
    * @description Save **QueryIngredientModel**
    * @operationId Ingredient_Save
    * @tag Ingredient
    * @tag model-setter
    * @path /api/Ingredient/Save
    */
    Save(params: {
        body?: ISaveIngredientModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveIngredientModel
    }): Promise<IQueryIngredientModel> { // #/components/schemas/GreenOnion.Common.Models.QueryIngredientModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Ingredient/Save?";
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

    protected processSave(response: Response): Promise<QueryIngredientModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryIngredientModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryIngredientModel>(null as any);
    }
    
}
