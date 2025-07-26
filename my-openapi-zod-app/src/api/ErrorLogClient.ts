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
import type { IErrorLogClient } from "./IErrorLogClient";

type integer = number;

// Models 
import { QueryErrorLogModelSearchQuery } from "./Models/QueryErrorLogModelSearchQuery";
import type { IQueryErrorLogModelSearchQuery } from "./Models/IQueryErrorLogModelSearchQuery";
import { QueryErrorLogModelPagedQueryResult } from "./Models/QueryErrorLogModelPagedQueryResult";
import type { IQueryErrorLogModelPagedQueryResult } from "./Models/IQueryErrorLogModelPagedQueryResult";

// Exports
export type { IErrorLogClient };

export type { IQueryErrorLogModelSearchQuery };
export type { IQueryErrorLogModelPagedQueryResult };

export class ErrorLogClient extends ClientBase implements IErrorLogClient  {
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
    * Query **QueryErrorLogModel**
    *
    * @description Query **QueryErrorLogModel**
    * @operationId ErrorLog_Query
    * @tag ErrorLog
    * @tag model-query
    * @path /api/ErrorLog/Query
    */
    Query(params: {
        body?: IQueryErrorLogModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryErrorLogModelSearchQuery
    }): Promise<IQueryErrorLogModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryErrorLogModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/ErrorLog/Query?";
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

    protected processQuery(response: Response): Promise<QueryErrorLogModelPagedQueryResult> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryErrorLogModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryErrorLogModelPagedQueryResult>(null as any);
    }
    
}
