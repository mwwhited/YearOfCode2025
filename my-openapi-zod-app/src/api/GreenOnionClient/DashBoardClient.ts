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
import type { IDashBoardClient } from "./IDashBoardClient";

type integer = number;

// Models 
import { DashBoardResponseModel } from "./DashBoardResponseModel";
import type { IDashBoardResponseModel } from "./IDashBoardResponseModel";

// Exports
export type { IDashBoardClient };

export type { IDashBoardResponseModel };

export class DashBoardClient extends ClientBase implements IDashBoardClient  {
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
    * @operationId DashBoard_GetDashBoardList
    * @tag DashBoard
    * @path /api/DashBoard/GetDashBoardProductList
    */
    GetDashBoardProductList(params: {
            userId?: integer | undefined; // 
    }): Promise<IDashBoardResponseModel> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/DashBoard/GetDashBoardProductList?";
        const { userId,  } = params;
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetDashBoardProductList(_response);
        });
    }

    protected processGetDashBoardProductList(response: Response): Promise<DashBoardResponseModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DashBoardResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DashBoardResponseModel>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetDashBoardTotalCountList
    * @tag DashBoard
    * @path /api/DashBoard/GetDashBoardTotalCountList
    */
    GetDashBoardTotalCountList(params: {
            userId?: integer | undefined; // 
    }): Promise<IDashBoardResponseModel> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/DashBoard/GetDashBoardTotalCountList?";
        const { userId,  } = params;
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetDashBoardTotalCountList(_response);
        });
    }

    protected processGetDashBoardTotalCountList(response: Response): Promise<DashBoardResponseModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DashBoardResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DashBoardResponseModel>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetDistrictFreeOfIOCProductList
    * @tag DashBoard
    * @path /api/DashBoard/GetDistrictFreeOfIOCProductList
    */
    GetDistrictFreeOfIOCProductList(params: {
            userId?: integer | undefined; // 
    }): Promise<IDashBoardResponseModel> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/DashBoard/GetDistrictFreeOfIOCProductList?";
        const { userId,  } = params;
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetDistrictFreeOfIOCProductList(_response);
        });
    }

    protected processGetDistrictFreeOfIOCProductList(response: Response): Promise<DashBoardResponseModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DashBoardResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DashBoardResponseModel>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetDistrictFreeOfIOCProductReplacesList
    * @tag DashBoard
    * @path /api/DashBoard/GetDistrictFreeOfIOCProductReplacesList
    */
    GetDistrictFreeOfIOCProductReplacesList(params: {
            userId?: integer | undefined; // 
    }): Promise<IDashBoardResponseModel> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/DashBoard/GetDistrictFreeOfIOCProductReplacesList?";
        const { userId,  } = params;
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetDistrictFreeOfIOCProductReplacesList(_response);
        });
    }

    protected processGetDistrictFreeOfIOCProductReplacesList(response: Response): Promise<DashBoardResponseModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DashBoardResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DashBoardResponseModel>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetManufactureTotalProductChart
    * @tag DashBoard
    * @path /api/DashBoard/GetManufactureTotalProductChart
    */
    GetManufactureTotalProductChart(params: {
    }): Promise<IDashBoardResponseModel> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/DashBoard/GetManufactureTotalProductChart?";
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
            return this.processGetManufactureTotalProductChart(_response);
        });
    }

    protected processGetManufactureTotalProductChart(response: Response): Promise<DashBoardResponseModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DashBoardResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DashBoardResponseModel>(null as any);
    }
    
}
