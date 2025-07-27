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
import type IAllergenClient from "../IAllergenClient";

// Models 
import type {
    IQueryAllergenModelSearchQuery,
    IQueryAllergenModelPagedQueryResult,
    IQueryAllergenModel,
    ISaveAllergenModel,
} from "../Models";

import {
    ZQueryAllergenModelSearchQuery,
    ZQueryAllergenModelPagedQueryResult,
    ZQueryAllergenModel,
    ZSaveAllergenModel,
} from "../Schema";

// Exports
export type { 
    IAllergenClient,

    IQueryAllergenModelSearchQuery,
    IQueryAllergenModelPagedQueryResult,
    IQueryAllergenModel,
    ISaveAllergenModel,
};

export default class AllergenClient extends ClientBase implements IAllergenClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * Query **QueryAllergenModel**
    * @description Query **QueryAllergenModel**
    * @operationId Allergen_Query
    * @tag Allergen
    * @tag model-query
    * @path /api/Allergen/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */
    Query(params: {
        body?: IQueryAllergenModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModelSearchQuery        
    }): Promise<IQueryAllergenModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Allergen/Query?";
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

    protected processQuery(response: Response): Promise<IQueryAllergenModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryAllergenModelPagedQueryResult.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryAllergenModelPagedQueryResult | undefined>(null as any);
    }
    /**
    * Get **QueryAllergenModel**
    * @description Get **QueryAllergenModel**
    * @operationId Allergen_Get
    * @tag Allergen
    * @tag model-getter
    * @path /api/Allergen/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQueryAllergenModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Allergen/Get?";
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

    protected processGet(response: Response): Promise<IQueryAllergenModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryAllergenModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryAllergenModel | undefined>(null as any);
    }
    /**
    * Save **QueryAllergenModel**
    * @description Save **QueryAllergenModel**
    * @operationId Allergen_Save
    * @tag Allergen
    * @tag model-setter
    * @path /api/Allergen/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */
    Save(params: {
        body?: ISaveAllergenModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveAllergenModel        
    }): Promise<IQueryAllergenModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Allergen/Save?";
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

    protected processSave(response: Response): Promise<IQueryAllergenModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryAllergenModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryAllergenModel | undefined>(null as any);
    }
}
