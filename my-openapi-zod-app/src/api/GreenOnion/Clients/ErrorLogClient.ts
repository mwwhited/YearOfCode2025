//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

// Interface
import { ClientBase, ApiException } from "../../_ClientBase";
export { ApiException };
import type IErrorLogClient from "../IErrorLogClient";

// Models 
import type {
    IQueryErrorLogModelSearchQuery,
    IQueryErrorLogModelPagedQueryResult,
} from "../Models";

import {
    ZQueryErrorLogModelSearchQuery,
    ZQueryErrorLogModelPagedQueryResult,
} from "../Schema";

// Exports
export type { 
    IErrorLogClient,

    IQueryErrorLogModelSearchQuery,
    IQueryErrorLogModelPagedQueryResult,
};

export default class ErrorLogClient extends ClientBase implements IErrorLogClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as unknown;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    async     /**
    * Query **QueryErrorLogModel**
    * @description Query **QueryErrorLogModel**
    * @operationId ErrorLog_Query
    * @tag ErrorLog
    * @tag model-query
    * @path /api/ErrorLog/Query 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryErrorLogModel
    */
    Query(params: {
        body?: IQueryErrorLogModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryErrorLogModelSearchQuery        
    }): Promise<IQueryErrorLogModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/ErrorLog/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryErrorLogModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            let result200: unknown = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = JSON.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return JSON.parse(resultData200);
            }
        }
    }
}
