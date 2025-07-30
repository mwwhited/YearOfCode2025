//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

// Interface
import { ClientBase, ApiException } from "../../_ClientBase";
export { ApiException };
import type IDataMigrationThroughApiClient from "../IDataMigrationThroughApiClient";

// Models 
import type {
    IDataMigrationThroughApiResponseModel,
} from "../Models";

import {
    ZDataMigrationThroughApiResponseModel,
} from "../Schema";

// Exports
export type { 
    IDataMigrationThroughApiClient,
    IDataMigrationThroughApiResponseModel,
};

export default class DataMigrationThroughApiClient extends ClientBase implements IDataMigrationThroughApiClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * @operationId DataMigrationThroughApi_ProductH7DataMigration
    * @tag DataMigrationThroughApi
    * @path /api/DataMigrationThroughApi/ProductH7DataMigration 
    * @anonymous false
    * @role Super Admin
    */
    async ProductH7DataMigration(): Promise<IDataMigrationThroughApiResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DataMigrationThroughApi/ProductH7DataMigration?";
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
        const processed = await this.processProductH7DataMigration(response);
        return processed;
    }

    protected async processProductH7DataMigration(response: Response): Promise<IDataMigrationThroughApiResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZDataMigrationThroughApiResponseModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
