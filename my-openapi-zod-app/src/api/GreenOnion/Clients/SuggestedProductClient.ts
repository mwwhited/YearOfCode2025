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
import type ISuggestedProductClient from "../ISuggestedProductClient";

// Models 
import type {
    ISuggestedProductRequestModel,
    ISuggestedProductResponseModel,
} from "../Models";

import {
    ZSuggestedProductRequestModel,
    ZSuggestedProductResponseModel,
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
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
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
    CreateSuggestedProduct(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processCreateSuggestedProduct(_response);
        });
    }

    protected processCreateSuggestedProduct(response: Response): Promise<ISuggestedProductResponseModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZSuggestedProductResponseModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ISuggestedProductResponseModel | undefined>(null as any);
    }
    /**
    * @operationId SuggestedProduct_ApproveSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/ApproveSuggestedProduct 
    * @anonymous false
    * @role Super Admin
    */
    ApproveSuggestedProduct(): Promise<ISuggestedProductResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SuggestedProduct/ApproveSuggestedProduct?";
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
            return this.processApproveSuggestedProduct(_response);
        });
    }

    protected processApproveSuggestedProduct(response: Response): Promise<ISuggestedProductResponseModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZSuggestedProductResponseModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ISuggestedProductResponseModel | undefined>(null as any);
    }
}
