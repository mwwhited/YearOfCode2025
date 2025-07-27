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
import type IIIocCategoryClient from "../IIIocCategoryClient";

// Models 
import type {
    IQueryIocCategoryModelSearchQuery,
    IQueryIocCategoryModelPagedQueryResult,
} from "../Models";

import {
    ZQueryIocCategoryModelSearchQuery,
    ZQueryIocCategoryModelPagedQueryResult,
} from "../Schema";

// Exports
export type { 
    IIIocCategoryClient,

    IQueryIocCategoryModelSearchQuery,
    IQueryIocCategoryModelPagedQueryResult,
};

export default class IIocCategoryClient extends ClientBase implements IIIocCategoryClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * Query **QueryIocCategoryModel**
    * @description Query **QueryIocCategoryModel**
    * @operationId IIocCategory_Query
    * @tag IIocCategory
    * @tag model-query
    * @path /api/IIocCategory/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryIocCategoryModel
    */
    Query(params: {
        body?: IQueryIocCategoryModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryIocCategoryModelSearchQuery        
    }): Promise<IQueryIocCategoryModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/IIocCategory/Query?";
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

    protected processQuery(response: Response): Promise<IQueryIocCategoryModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryIocCategoryModelPagedQueryResult.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryIocCategoryModelPagedQueryResult | undefined>(null as any);
    }
}
