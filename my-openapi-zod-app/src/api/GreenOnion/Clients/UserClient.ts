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
import type IUserClient from "../IUserClient";

// Models 
import type {
    IQueryUserModelSearchQuery,
    IQueryUserModelPagedQueryResult,
    IQueryUserModel,
    ISaveUserModel,
    INewUserEmailModel,
} from "../Models";

import {
    ZQueryUserModelSearchQuery,
    ZQueryUserModelPagedQueryResult,
    ZQueryUserModel,
    ZSaveUserModel,
    ZNewUserEmailModel,
} from "../Schema";

// Exports
export type { 
    IUserClient,

    IQueryUserModelSearchQuery,
    IQueryUserModelPagedQueryResult,
    IQueryUserModel,
    ISaveUserModel,
    INewUserEmailModel,
};

export default class UserClient extends ClientBase implements IUserClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }

    /**
    * Query **QueryUserModel**
    * @description Query **QueryUserModel**
    * @operationId User_Query
    * @tag User
    * @tag model-query
    * @path /api/User/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryUserModel
    */
    async Query(params: {
        body?: IQueryUserModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryUserModelSearchQuery        
    }): Promise<IQueryUserModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/User/Query?";
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
        const processed = await this.processQuery(response);
        return processed;
    }

    protected async processQuery(response: Response): Promise<IQueryUserModelPagedQueryResult | undefined>
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
    * Get **QueryUserModel**
    * @description Get **QueryUserModel**
    * @operationId User_Get
    * @tag User
    * @tag model-getter
    * @path /api/User/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryUserModel
    */
    async Get(params: {
            id?: number | undefined;
            email?: string | undefined;
            objectid?: string | undefined;
    }): Promise<IQueryUserModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/User/Get?";
        const { id, email, objectid,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (email === null)
            throw new Error("The parameter 'email' cannot be null.");
        else if (email !== undefined)
            url_ += "email=" + encodeURIComponent("" + id) + "&";
        if (objectid === null)
            throw new Error("The parameter 'objectid' cannot be null.");
        else if (objectid !== undefined)
            url_ += "objectid=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processGet(response);
        return processed;
    }

    protected async processGet(response: Response): Promise<IQueryUserModel | undefined>
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
    * Save **QueryUserModel**
    * @description Save **QueryUserModel**
    * @operationId User_Save
    * @tag User
    * @tag model-setter
    * @path /api/User/Save 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryUserModel
    */
    async Save(params: {
        body?: ISaveUserModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveUserModel        
    }): Promise<IQueryUserModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/User/Save?";
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
        const processed = await this.processSave(response);
        return processed;
    }

    protected async processSave(response: Response): Promise<IQueryUserModel | undefined>
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
    * @operationId User_SendNewUserEmail
    * @tag User
    * @path /api/User/SendNewUserEmail 
    * @anonymous false
    */
    async SendNewUserEmail(params: {
        body?: INewUserEmailModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Users.NewUserEmailModel        
    }): Promise<void> 
    { 
        let url_ = this.baseUrl + "/api/User/SendNewUserEmail?";
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
        const processed = await this.processSendNewUserEmail(response);
        return processed;
    }

    protected async processSendNewUserEmail(response: Response): Promise<unknown | undefined>
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
