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
import type IReportClient from "../IReportClient";

// Models 
import type {
    IProductActivityReportFilter,
    IUserResponseModel,
} from "../Models";

import {
    ZProductActivityReportFilter,
    ZUserResponseModel,
} from "../Schema";

// Exports
export type { 
    IReportClient,

    IProductActivityReportFilter,
    IUserResponseModel,
};

export default class ReportClient extends ClientBase implements IReportClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * @operationId Report_GetProductActivityReportFilter
    * @tag Report
    * @path /api/Report/GetProductActivityReportFilter 
    * @anonymous false
    */
    GetProductActivityReportFilter(params: {
        body?: IProductActivityReportFilter | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Reports.ProductActivityReportFilter        
    }): Promise<IUserResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Report/GetProductActivityReportFilter?";
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
            return this.processGetProductActivityReportFilter(_response);
        });
    }

    protected processGetProductActivityReportFilter(response: Response): Promise<IUserResponseModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZUserResponseModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IUserResponseModel | undefined>(null as any);
    }
    /**
    * @operationId Report_GetItemDetailByProductIdReport
    * @tag Report
    * @path /api/Report/GetItemDetailByProductIdReport 
    * @anonymous false
    */
    GetItemDetailByProductIdReport(params: {
            productId?: number | undefined;
    }): Promise<IUserResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Report/GetItemDetailByProductIdReport?";
        const { productId,  } = params;
        if (productId === null)
            throw new Error("The parameter 'productId' cannot be null.");
        else if (productId !== undefined)
            url_ += "productId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetItemDetailByProductIdReport(_response);
        });
    }

    protected processGetItemDetailByProductIdReport(response: Response): Promise<IUserResponseModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZUserResponseModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IUserResponseModel | undefined>(null as any);
    }
}
