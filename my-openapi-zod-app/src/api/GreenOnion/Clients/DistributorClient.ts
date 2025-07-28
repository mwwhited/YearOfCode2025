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
import type IDistributorClient from "../IDistributorClient";

// Models 
import type {
    IQueryDistributorModelSearchQuery,
    IQueryDistributorModelPagedQueryResult,
    IQueryDistributorModel,
    ISaveDistributorModel,
} from "../Models";

import {
    ZQueryDistributorModelSearchQuery,
    ZQueryDistributorModelPagedQueryResult,
    ZQueryDistributorModel,
    ZSaveDistributorModel,
} from "../Schema";

// Exports
export type { 
    IDistributorClient,

    IQueryDistributorModelSearchQuery,
    IQueryDistributorModelPagedQueryResult,
    IQueryDistributorModel,
    ISaveDistributorModel,
};

export default class DistributorClient extends ClientBase implements IDistributorClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as unknown;
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    async     /**
    * Query **QueryDistributorModel**
    * @description Query **QueryDistributorModel**
    * @operationId Distributor_Query
    * @tag Distributor
    * @tag model-query
    * @path /api/Distributor/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryDistributorModel
    */
    Query(params: {
        body?: IQueryDistributorModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryDistributorModelSearchQuery        
    }): Promise<IQueryDistributorModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Distributor/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryDistributorModelPagedQueryResult | undefined>
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
    /**
    * Get **QueryDistributorModel**
    * @description Get **QueryDistributorModel**
    * @operationId Distributor_Get
    * @tag Distributor
    * @tag model-getter
    * @path /api/Distributor/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryDistributorModel
    */
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQueryDistributorModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Distributor/Get?";
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

    protected async processGet(response: Response): Promise<IQueryDistributorModel | undefined>
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
    * Save **QueryDistributorModel**
    * @description Save **QueryDistributorModel**
    * @operationId Distributor_Save
    * @tag Distributor
    * @tag model-setter
    * @path /api/Distributor/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryDistributorModel
    */
    Save(params: {
        body?: ISaveDistributorModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveDistributorModel        
    }): Promise<IQueryDistributorModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Distributor/Save?";
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

    protected async processSave(response: Response): Promise<IQueryDistributorModel | undefined>
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
