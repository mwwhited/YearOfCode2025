//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

// Interface
import { ClientBase } from "./_ClientBase";
import type { IOneWorldSyncProductClient } from "./IOneWorldSyncProductClient";

type integer = number;

// Models 
import { QueryOneWorldSyncProductModelSearchQuery } from "./Models/QueryOneWorldSyncProductModelSearchQuery";
import type { IQueryOneWorldSyncProductModelSearchQuery } from "./Models/IQueryOneWorldSyncProductModelSearchQuery";
import { QueryOneWorldSyncProductModelPagedQueryResult } from "./Models/QueryOneWorldSyncProductModelPagedQueryResult";
import type { IQueryOneWorldSyncProductModelPagedQueryResult } from "./Models/IQueryOneWorldSyncProductModelPagedQueryResult";
import { QueryOneWorldSyncProductModel } from "./Models/QueryOneWorldSyncProductModel";
import type { IQueryOneWorldSyncProductModel } from "./Models/IQueryOneWorldSyncProductModel";
import { SaveOneWorldSyncProductModel } from "./Models/SaveOneWorldSyncProductModel";
import type { ISaveOneWorldSyncProductModel } from "./Models/ISaveOneWorldSyncProductModel";

// Exports
export type { IOneWorldSyncProductClient };

export type { IQueryOneWorldSyncProductModelSearchQuery };
export type { IQueryOneWorldSyncProductModelPagedQueryResult };
export type { IQueryOneWorldSyncProductModel };
export type { ISaveOneWorldSyncProductModel };

export class OneWorldSyncProductClient extends ClientBase implements IOneWorldSyncProductClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * Query **QueryOneWorldSyncProductModel**
    * @description Query **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Query
    * @tag OneWorldSyncProduct
    * @tag model-query
    * @path /api/OneWorldSyncProduct/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    Query(params: {
        body?: IQueryOneWorldSyncProductModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryOneWorldSyncProductModelSearchQuery        
    }): Promise<IQueryOneWorldSyncProductModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/OneWorldSyncProduct/Query?";
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

    protected processQuery(response: Response): Promise<IQueryOneWorldSyncProductModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryOneWorldSyncProductModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryOneWorldSyncProductModelPagedQueryResult | undefined>(null as any);
    }
    /**
    * Get **QueryOneWorldSyncProductModel**
    * @description Get **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Get
    * @tag OneWorldSyncProduct
    * @tag model-getter
    * @path /api/OneWorldSyncProduct/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    Get(params: {
            id?: number | undefined;
            gtin?: string | undefined;
            upc?: string | undefined;
    }): Promise<IQueryOneWorldSyncProductModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/OneWorldSyncProduct/Get?";
        const { id, gtin, upc,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (gtin === null)
            throw new Error("The parameter 'gtin' cannot be null.");
        else if (gtin !== undefined)
            url_ += "gtin=" + encodeURIComponent("" + id) + "&";
        if (upc === null)
            throw new Error("The parameter 'upc' cannot be null.");
        else if (upc !== undefined)
            url_ += "upc=" + encodeURIComponent("" + id) + "&";
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

    protected processGet(response: Response): Promise<IQueryOneWorldSyncProductModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryOneWorldSyncProductModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryOneWorldSyncProductModel | undefined>(null as any);
    }
    /**
    * Save **QueryOneWorldSyncProductModel**
    * @description Save **QueryOneWorldSyncProductModel**
    * @operationId OneWorldSyncProduct_Save
    * @tag OneWorldSyncProduct
    * @tag model-setter
    * @path /api/OneWorldSyncProduct/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryOneWorldSyncProductModel
    */
    Save(params: {
        body?: ISaveOneWorldSyncProductModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveOneWorldSyncProductModel        
    }): Promise<IQueryOneWorldSyncProductModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/OneWorldSyncProduct/Save?";
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

    protected processSave(response: Response): Promise<IQueryOneWorldSyncProductModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryOneWorldSyncProductModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryOneWorldSyncProductModel | undefined>(null as any);
    }
}
