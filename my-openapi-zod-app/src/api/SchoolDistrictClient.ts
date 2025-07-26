//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

// Interface
import { ClientBase } from "./_ClientBase";
import type { ISchoolDistrictClient } from "./ISchoolDistrictClient";

type integer = number;

// Models 
import { QuerySchoolDistrictModelSearchQuery } from "./Models/QuerySchoolDistrictModelSearchQuery";
import type { IQuerySchoolDistrictModelSearchQuery } from "./Models/IQuerySchoolDistrictModelSearchQuery";
import { QuerySchoolDistrictModelPagedQueryResult } from "./Models/QuerySchoolDistrictModelPagedQueryResult";
import type { IQuerySchoolDistrictModelPagedQueryResult } from "./Models/IQuerySchoolDistrictModelPagedQueryResult";
import { QuerySchoolDistrictModel } from "./Models/QuerySchoolDistrictModel";
import type { IQuerySchoolDistrictModel } from "./Models/IQuerySchoolDistrictModel";
import { SaveSchoolDistrictModel } from "./Models/SaveSchoolDistrictModel";
import type { ISaveSchoolDistrictModel } from "./Models/ISaveSchoolDistrictModel";

// Exports
export type { ISchoolDistrictClient };

export type { IQuerySchoolDistrictModelSearchQuery };
export type { IQuerySchoolDistrictModelPagedQueryResult };
export type { IQuerySchoolDistrictModel };
export type { ISaveSchoolDistrictModel };

export class SchoolDistrictClient extends ClientBase implements ISchoolDistrictClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * Query **QuerySchoolDistrictModel**
    * @description Query **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Query
    * @tag SchoolDistrict
    * @tag model-query
    * @path /api/SchoolDistrict/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */
    Query(params: {
        body?: IQuerySchoolDistrictModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QuerySchoolDistrictModelSearchQuery        
    }): Promise<IQuerySchoolDistrictModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SchoolDistrict/Query?";
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

    protected processQuery(response: Response): Promise<IQuerySchoolDistrictModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QuerySchoolDistrictModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQuerySchoolDistrictModelPagedQueryResult | undefined>(null as any);
    }
    /**
    * Get **QuerySchoolDistrictModel**
    * @description Get **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Get
    * @tag SchoolDistrict
    * @tag model-getter
    * @path /api/SchoolDistrict/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQuerySchoolDistrictModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SchoolDistrict/Get?";
        const { id, name,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (name === null)
            throw new Error("The parameter 'name' cannot be null.");
        else if (name !== undefined)
            url_ += "name=" + encodeURIComponent("" + id) + "&";
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

    protected processGet(response: Response): Promise<IQuerySchoolDistrictModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QuerySchoolDistrictModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQuerySchoolDistrictModel | undefined>(null as any);
    }
    /**
    * Save **QuerySchoolDistrictModel**
    * @description Save **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Save
    * @tag SchoolDistrict
    * @tag model-setter
    * @path /api/SchoolDistrict/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */
    Save(params: {
        body?: ISaveSchoolDistrictModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveSchoolDistrictModel        
    }): Promise<IQuerySchoolDistrictModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/SchoolDistrict/Save?";
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

    protected processSave(response: Response): Promise<IQuerySchoolDistrictModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QuerySchoolDistrictModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQuerySchoolDistrictModel | undefined>(null as any);
    }
}
