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
import type ISuggestedProductClient from "../ISuggestedProductClient";

// Models 
import type {
    ISuggestedProductRequestModel,
    ISuggestedProductResponseModel,
    IApproveSuggestProductRequestModel,
} from "../Models";

import {
    ZSuggestedProductRequestModel,
    ZSuggestedProductResponseModel,
    ZApproveSuggestProductRequestModel,
} from "../Schema";

// Exports
export type { 
    ISuggestedProductClient,

    ISuggestedProductRequestModel,
    ISuggestedProductResponseModel,
};

export default class SuggestedProductClient extends ClientBase implements ISuggestedProductClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * @operationId SuggestedProduct_CreateSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/CreateSuggestedProduct 
    * @anonymous false
    * @role Super Admin
    * @role District Admin
    * @role Cooperative Admin
    */
    async CreateSuggestedProduct(params: {
        body?: ISuggestedProductRequestModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.SuggestedProduct.SuggestedProductRequestModel        
    }): Promise<ISuggestedProductResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SuggestedProduct/CreateSuggestedProduct?";
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

        const transformedOptions = await this.transformOptions(options_);
        const response = await  this.http.fetch(url_, transformedOptions);
        const processed = await this.processCreateSuggestedProduct(response);
        return processed;
    }

    protected async processCreateSuggestedProduct(response: Response): Promise<ISuggestedProductResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZSuggestedProductResponseModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }    
    /**
    * @operationId SuggestedProduct_ApproveSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/ApproveSuggestedProduct 
    * @anonymous false
    * @role Super Admin
    */
    async ApproveSuggestedProduct(params: {
        body?: IApproveSuggestProductRequestModel[] | undefined;
    }): Promise<ISuggestedProductResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SuggestedProduct/ApproveSuggestedProduct?";
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

        const transformedOptions = await this.transformOptions(options_);
        const response = await  this.http.fetch(url_, transformedOptions);
        const processed = await this.processApproveSuggestedProduct(response);
        return processed;
    }

    protected async processApproveSuggestedProduct(response: Response): Promise<ISuggestedProductResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZSuggestedProductResponseModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
