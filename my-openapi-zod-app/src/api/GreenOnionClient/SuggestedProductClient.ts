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
import type { ISuggestedProductClient } from "./ISuggestedProductClient";

type integer = number;

// Models 
import { SuggestedProductRequestModel } from "./SuggestedProductRequestModel";
import type { ISuggestedProductRequestModel } from "./ISuggestedProductRequestModel";
import { SuggestedProductResponseModel } from "./SuggestedProductResponseModel";
import type { ISuggestedProductResponseModel } from "./ISuggestedProductResponseModel";

// Exports
export type { ISuggestedProductClient };

export type { ISuggestedProductRequestModel };
export type { ISuggestedProductResponseModel };

export class SuggestedProductClient extends ClientBase implements ISuggestedProductClient  {
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
    * 
    *
    * @description 
    * @operationId SuggestedProduct_CreateSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/CreateSuggestedProduct
    */
    CreateSuggestedProduct(params: {
        body?: ISuggestedProductRequestModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.SuggestedProduct.SuggestedProductRequestModel
    }): Promise<ISuggestedProductResponseModel> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.SuggestedProduct.SuggestedProductResponseModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/SuggestedProduct/CreateSuggestedProduct?";
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
            return this.processCreateSuggestedProduct(_response);
        });
    }

    protected processCreateSuggestedProduct(response: Response): Promise<SuggestedProductResponseModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = SuggestedProductResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SuggestedProductResponseModel>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId SuggestedProduct_ApproveSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/ApproveSuggestedProduct
    */
    ApproveSuggestedProduct(params: {
    }): Promise<ISuggestedProductResponseModel> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.SuggestedProduct.SuggestedProductResponseModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/SuggestedProduct/ApproveSuggestedProduct?";
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
            return this.processApproveSuggestedProduct(_response);
        });
    }

    protected processApproveSuggestedProduct(response: Response): Promise<SuggestedProductResponseModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = SuggestedProductResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SuggestedProductResponseModel>(null as any);
    }
    
}
