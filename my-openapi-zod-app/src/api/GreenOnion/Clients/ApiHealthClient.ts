//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

// Interface
import { ClientBase, ApiException } from "../../_ClientBase";
export { ApiException };
import type IApiHealthClient from "../IApiHealthClient";

// Models 
import type {
} from "../Models";

import {
} from "../Schema";

// Exports
export type { 
    IApiHealthClient,

};

export default class ApiHealthClient extends ClientBase implements IApiHealthClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as unknown;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * @operationId Health
    * @tag ApiHealth
    * @path /health 
    */
    async Health(): Promise<object | undefined> 
    { 
        let url_ = this.baseUrl + "/health?";
        url_ = url_.replace(/[?&]$/, "");
        const options_: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        const transformedOptions = await this.transformOptions(options_);
        const response = await  this.http.fetch(url_, transformedOptions);
        const processed = await this.processHealth(response);
        return processed;
    }

    protected async processHealth(response: Response): Promise<object | undefined>
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
