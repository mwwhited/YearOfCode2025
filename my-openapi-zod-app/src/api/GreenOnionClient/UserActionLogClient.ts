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
import type { IUserActionLogClient } from "./IUserActionLogClient";

type integer = number;

// Models 
import { QueryUserActionLogModelSearchQuery } from "./QueryUserActionLogModelSearchQuery";
import type { IQueryUserActionLogModelSearchQuery } from "./IQueryUserActionLogModelSearchQuery";
import { QueryUserActionLogModelPagedQueryResult } from "./QueryUserActionLogModelPagedQueryResult";
import type { IQueryUserActionLogModelPagedQueryResult } from "./IQueryUserActionLogModelPagedQueryResult";

// Exports
export type { IUserActionLogClient };

export type { IQueryUserActionLogModelSearchQuery };
export type { IQueryUserActionLogModelPagedQueryResult };

export class UserActionLogClient extends ClientBase implements IUserActionLogClient  {
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
    * Query **QueryUserActionLogModel**
    *
    * @description Query **QueryUserActionLogModel**
    * @operationId UserActionLog_Query
    * @tag UserActionLog
    * @tag model-query
    * @path /api/UserActionLog/Query
    */
    Query(params: {
        body?: IQueryUserActionLogModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryUserActionLogModelSearchQuery
    }): Promise<IQueryUserActionLogModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryUserActionLogModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/UserActionLog/Query?";
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

    protected processQuery(response: Response): Promise<QueryUserActionLogModelPagedQueryResult> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryUserActionLogModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryUserActionLogModelPagedQueryResult>(null as any);
    }
    
}
