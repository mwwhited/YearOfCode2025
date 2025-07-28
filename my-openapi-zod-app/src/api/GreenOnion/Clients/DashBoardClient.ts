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
import type IDashBoardClient from "../IDashBoardClient";

// Models 
import type {
    IDashBoardResponseModel,
} from "../Models";

import {
    ZDashBoardResponseModel,
} from "../Schema";

// Exports
export type { 
    IDashBoardClient,

    IDashBoardResponseModel,
};

export default class DashBoardClient extends ClientBase implements IDashBoardClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * @operationId DashBoard_GetDashBoardList
    * @tag DashBoard
    * @path /api/DashBoard/GetDashBoardProductList 
    * @anonymous false
    */
    async GetDashBoardList(params: {
            userId?: number | undefined;
    }): Promise<IDashBoardResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DashBoard/GetDashBoardProductList?";
        const { userId,  } = params;
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processGetDashBoardList(response);
        return processed;
    }

    protected async processGetDashBoardList(response: Response): Promise<IDashBoardResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZDashBoardResponseModel.parse(resultData200);
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
    * @operationId DashBoard_GetDashBoardTotalCountList
    * @tag DashBoard
    * @path /api/DashBoard/GetDashBoardTotalCountList 
    * @anonymous false
    */
    async GetDashBoardTotalCountList(params: {
            userId?: number | undefined;
    }): Promise<IDashBoardResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DashBoard/GetDashBoardTotalCountList?";
        const { userId,  } = params;
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processGetDashBoardTotalCountList(response);
        return processed;
    }

    protected async processGetDashBoardTotalCountList(response: Response): Promise<IDashBoardResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZDashBoardResponseModel.parse(resultData200);
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
    * @operationId DashBoard_GetDistrictFreeOfIOCProductList
    * @tag DashBoard
    * @path /api/DashBoard/GetDistrictFreeOfIOCProductList 
    * @anonymous false
    */
    async GetDistrictFreeOfIOCProductList(params: {
            userId?: number | undefined;
    }): Promise<IDashBoardResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DashBoard/GetDistrictFreeOfIOCProductList?";
        const { userId,  } = params;
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processGetDistrictFreeOfIOCProductList(response);
        return processed;
    }

    protected async processGetDistrictFreeOfIOCProductList(response: Response): Promise<IDashBoardResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZDashBoardResponseModel.parse(resultData200);
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
    * @operationId DashBoard_GetDistrictFreeOfIOCProductReplacesList
    * @tag DashBoard
    * @path /api/DashBoard/GetDistrictFreeOfIOCProductReplacesList 
    * @anonymous false
    */
    async GetDistrictFreeOfIOCProductReplacesList(params: {
            userId?: number | undefined;
    }): Promise<IDashBoardResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DashBoard/GetDistrictFreeOfIOCProductReplacesList?";
        const { userId,  } = params;
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processGetDistrictFreeOfIOCProductReplacesList(response);
        return processed;
    }

    protected async processGetDistrictFreeOfIOCProductReplacesList(response: Response): Promise<IDashBoardResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZDashBoardResponseModel.parse(resultData200);
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
    * @operationId DashBoard_GetManufactureTotalProductChart
    * @tag DashBoard
    * @path /api/DashBoard/GetManufactureTotalProductChart 
    * @anonymous false
    * @role Manufacturer User
    */
    async GetManufactureTotalProductChart(): Promise<IDashBoardResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/DashBoard/GetManufactureTotalProductChart?";
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
        const processed = await this.processGetManufactureTotalProductChart(response);
        return processed;
    }

    protected async processGetManufactureTotalProductChart(response: Response): Promise<IDashBoardResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZDashBoardResponseModel.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }}
