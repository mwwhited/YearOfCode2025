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
import type IMonthlyNumberClient from "../IMonthlyNumberClient";

// Models 
import type {
    IQueryMonthlyNumberModelSearchQuery,
    IQueryMonthlyNumberModelPagedQueryResult,
    IQueryMonthlyNumberModel,
    ISaveMonthlyNumberModel,
} from "../Models";

import {
    ZQueryMonthlyNumberModelSearchQuery,
    ZQueryMonthlyNumberModelPagedQueryResult,
    ZQueryMonthlyNumberModel,
    ZSaveMonthlyNumberModel,
} from "../Schema";

// Exports
export type { 
    IMonthlyNumberClient,

    IQueryMonthlyNumberModelSearchQuery,
    IQueryMonthlyNumberModelPagedQueryResult,
    IQueryMonthlyNumberModel,
    ISaveMonthlyNumberModel,
};

export default class MonthlyNumberClient extends ClientBase implements IMonthlyNumberClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * Query **QueryMonthlyNumberModel**
    * @description Query **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Query
    * @tag MonthlyNumber
    * @tag model-query
    * @path /api/MonthlyNumber/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    Query(params: {
        body?: IQueryMonthlyNumberModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryMonthlyNumberModelSearchQuery        
    }): Promise<IQueryMonthlyNumberModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/MonthlyNumber/Query?";
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

    protected processQuery(response: Response): Promise<IQueryMonthlyNumberModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryMonthlyNumberModelPagedQueryResult.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryMonthlyNumberModelPagedQueryResult | undefined>(null as any);
    }
    /**
    * Get **QueryMonthlyNumberModel**
    * @description Get **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Get
    * @tag MonthlyNumber
    * @tag model-getter
    * @path /api/MonthlyNumber/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    Get(params: {
            id?: number | undefined;
            schoolDistrictId?: number | undefined;
            year?: string | undefined;
    }): Promise<IQueryMonthlyNumberModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/MonthlyNumber/Get?";
        const { id, schoolDistrictId, year,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (schoolDistrictId === null)
            throw new Error("The parameter 'schoolDistrictId' cannot be null.");
        else if (schoolDistrictId !== undefined)
            url_ += "schoolDistrictId=" + encodeURIComponent("" + id) + "&";
        if (year === null)
            throw new Error("The parameter 'year' cannot be null.");
        else if (year !== undefined)
            url_ += "year=" + encodeURIComponent("" + id) + "&";
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
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<IQueryMonthlyNumberModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryMonthlyNumberModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryMonthlyNumberModel | undefined>(null as any);
    }
    /**
    * Save **QueryMonthlyNumberModel**
    * @description Save **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Save
    * @tag MonthlyNumber
    * @tag model-setter
    * @path /api/MonthlyNumber/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    Save(params: {
        body?: ISaveMonthlyNumberModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveMonthlyNumberModel        
    }): Promise<IQueryMonthlyNumberModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/MonthlyNumber/Save?";
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
            return this.processSave(_response);
        });
    }

    protected processSave(response: Response): Promise<IQueryMonthlyNumberModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryMonthlyNumberModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryMonthlyNumberModel | undefined>(null as any);
    }
}
