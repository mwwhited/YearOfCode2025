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
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as unknown;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    async     /**
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

    protected async processGetProductActivityReportFilter(response: Response): Promise<IUserResponseModel | undefined>
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
    async     /**
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

    protected async processGetItemDetailByProductIdReport(response: Response): Promise<IUserResponseModel | undefined>
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
