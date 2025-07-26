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
import type { IUserClient } from "./IUserClient";

type integer = number;

// Models 
import { QueryUserModelSearchQuery } from "./Models/QueryUserModelSearchQuery";
import type { IQueryUserModelSearchQuery } from "./Models/IQueryUserModelSearchQuery";
import { QueryUserModelPagedQueryResult } from "./Models/QueryUserModelPagedQueryResult";
import type { IQueryUserModelPagedQueryResult } from "./Models/IQueryUserModelPagedQueryResult";
import { QueryUserModel } from "./Models/QueryUserModel";
import type { IQueryUserModel } from "./Models/IQueryUserModel";
import { SaveUserModel } from "./Models/SaveUserModel";
import type { ISaveUserModel } from "./Models/ISaveUserModel";
import { NewUserEmailModel } from "./Models/NewUserEmailModel";
import type { INewUserEmailModel } from "./Models/INewUserEmailModel";

// Exports
export type { IUserClient };

export type { IQueryUserModelSearchQuery };
export type { IQueryUserModelPagedQueryResult };
export type { IQueryUserModel };
export type { ISaveUserModel };
export type { INewUserEmailModel };

export class UserClient extends ClientBase implements IUserClient  {
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
    * Query **QueryUserModel**
    *
    * @description Query **QueryUserModel**
    * @operationId User_Query
    * @tag User
    * @tag model-query
    * @path /api/User/Query
    */
    Query(params: {
        body?: IQueryUserModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryUserModelSearchQuery
    }): Promise<IQueryUserModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryUserModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/User/Query?";
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
            return this.processQuery(_response);
        });
    }

    protected processQuery(response: Response): Promise<QueryUserModelPagedQueryResult> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryUserModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryUserModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryUserModel**
    *
    * @description Get **QueryUserModel**
    * @operationId User_Get
    * @tag User
    * @tag model-getter
    * @path /api/User/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            email?: string | undefined; // 
            objectid?: string | undefined; // 
    }): Promise<IQueryUserModel> {
        const { id, email, objectid,  } = params;
        let url_ = this.baseUrl + "/api/User/Get?";
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
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<QueryUserModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryUserModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryUserModel>(null as any);
    }
    /**
    *
    * Save **QueryUserModel**
    *
    * @description Save **QueryUserModel**
    * @operationId User_Save
    * @tag User
    * @tag model-setter
    * @path /api/User/Save
    */
    Save(params: {
        body?: ISaveUserModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveUserModel
    }): Promise<IQueryUserModel> { // #/components/schemas/GreenOnion.Common.Models.QueryUserModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/User/Save?";
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
            return this.processSave(_response);
        });
    }

    protected processSave(response: Response): Promise<QueryUserModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryUserModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryUserModel>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId User_SendNewUserEmail
    * @tag User
    * @path /api/User/SendNewUserEmail
    */
    
}
