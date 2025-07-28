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
import type IProductClient from "../IProductClient";

// Models 
import type {
    IQueryProductModelSearchQuery,
    IQueryProductModelPagedQueryResult,
    IQueryProductModel,
    ISaveProductModel,
    IContentReference,
    IProductResponse,
    IProductGtinAllocationModel,
    IProductUpcAllocationModel,
    ISelectPrdFileupload,
    IFileUploadResponse,
    ISelectProductSaveCheckListRequestModel,
    IBaseResponseModel,
} from "../Models";

import {
    ZQueryProductModelSearchQuery,
    ZQueryProductModelPagedQueryResult,
    ZQueryProductModel,
    ZSaveProductModel,
    ZContentReference,
    ZProductResponse,
    ZProductGtinAllocationModel,
    ZProductUpcAllocationModel,
    ZSelectPrdFileupload,
    ZFileUploadResponse,
    ZSelectProductSaveCheckListRequestModel,
    ZBaseResponseModel,
} from "../Schema";

// Exports
export type { 
    IProductClient,

    IQueryProductModelSearchQuery,
    IQueryProductModelPagedQueryResult,
    IQueryProductModel,
    ISaveProductModel,
    IContentReference,
    IProductResponse,
    IProductGtinAllocationModel,
    IProductUpcAllocationModel,
    ISelectPrdFileupload,
    IFileUploadResponse,
    ISelectProductSaveCheckListRequestModel,
    IBaseResponseModel,
};

export default class ProductClient extends ClientBase implements IProductClient  {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: unknown) => unknown) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : (window as any);
        this.baseUrl = this.getBaseUrl("", baseUrl);
    }
    
    /**
    * Query **QueryProductModel**
    * @description Query **QueryProductModel**
    * @operationId Product_Query
    * @tag Product
    * @tag model-query
    * @path /api/Product/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryProductModel
    */
    async Query(params: {
        body?: IQueryProductModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryProductModelSearchQuery        
    }): Promise<IQueryProductModelPagedQueryResult | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/Query?";
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

    protected async processQuery(response: Response): Promise<IQueryProductModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryProductModelPagedQueryResult.parse(resultData200);
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
    * Get **QueryProductModel**
    * @description Get **QueryProductModel**
    * @operationId Product_Get
    * @tag Product
    * @tag model-getter
    * @path /api/Product/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryProductModel
    */
    async Get(params: {
            id?: number | undefined;
            gtin?: string | undefined;
            upc?: string | undefined;
    }): Promise<IQueryProductModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/Get?";
        const { id, gtin, upc,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (gtin === null)
            throw new Error("The parameter 'gtin' cannot be null.");
        else if (gtin !== undefined)
            url_ += "gtin=" + encodeURIComponent("" + id) + "&";
        if (upc === null)
            throw new Error("The parameter 'upc' cannot be null.");
        else if (upc !== undefined)
            url_ += "upc=" + encodeURIComponent("" + id) + "&";
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

    protected async processGet(response: Response): Promise<IQueryProductModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryProductModel.parse(resultData200);
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
    * Save **QueryProductModel**
    * @description Save **QueryProductModel**
    * @operationId Product_Save
    * @tag Product
    * @tag model-setter
    * @path /api/Product/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryProductModel
    */
    async Save(params: {
        body?: ISaveProductModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveProductModel        
    }): Promise<IQueryProductModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/Save?";
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

    protected async processSave(response: Response): Promise<IQueryProductModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZQueryProductModel.parse(resultData200);
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
    * @operationId Product_Pdfs
    * @tag Product
    * @path /api/Product/Pdfs/{id} 
    * @anonymous false
    */
    async Pdfs(params: {
            id?: string | undefined;
            download?: boolean | undefined;
    }): Promise<IContentReference | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/Pdfs/{id}?";
        const { id, download,  } = params;
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (download === null)
            throw new Error("The parameter 'download' cannot be null.");
        else if (download !== undefined)
            url_ += "download=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processPdfs(response);
        return processed;
    }

    protected async processPdfs(response: Response): Promise<IContentReference | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZContentReference.parse(resultData200);
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
    * @operationId Product_CreateProduct
    * @tag Product
    * @path /api/Product/CreateProduct 
    * @anonymous false
    */
    async CreateProduct(): Promise<IProductResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/CreateProduct?";
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
        const processed = await this.processCreateProduct(response);
        return processed;
    }

    protected async processCreateProduct(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZProductResponse.parse(resultData200);
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
    * @operationId Product_GetProductDataByID
    * @tag Product
    * @path /api/Product/GetProductDataByID 
    * @anonymous false
    */
    async GetProductDataByID(params: {
            ProductId?: number | undefined;
    }): Promise<IProductResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/GetProductDataByID?";
        const { ProductId,  } = params;
        if (ProductId === null)
            throw new Error("The parameter 'ProductId' cannot be null.");
        else if (ProductId !== undefined)
            url_ += "ProductId=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processGetProductDataByID(response);
        return processed;
    }

    protected async processGetProductDataByID(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZProductResponse.parse(resultData200);
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
    * @operationId Product_CreateUpdateGtinAllocation
    * @tag Product
    * @path /api/Product/CreateUpdateGtinAllocation 
    * @anonymous false
    */
    async CreateUpdateGtinAllocation(params: {
        body?: IProductGtinAllocationModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.ProductGtinAllocationModel        
    }): Promise<IProductResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/CreateUpdateGtinAllocation?";
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
        const processed = await this.processCreateUpdateGtinAllocation(response);
        return processed;
    }

    protected async processCreateUpdateGtinAllocation(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZProductResponse.parse(resultData200);
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
    * @operationId Product_CreateUpdateUpcAllocation
    * @tag Product
    * @path /api/Product/CreateUpdateUpcAllocation 
    * @anonymous false
    */
    async CreateUpdateUpcAllocation(params: {
        body?: IProductUpcAllocationModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.ProductUpcAllocationModel        
    }): Promise<IProductResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/CreateUpdateUpcAllocation?";
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
        const processed = await this.processCreateUpdateUpcAllocation(response);
        return processed;
    }

    protected async processCreateUpdateUpcAllocation(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZProductResponse.parse(resultData200);
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
    * @operationId Product_GetProductAllGtin
    * @tag Product
    * @path /api/Product/GetProductAllGtin 
    * @anonymous false
    */
    async GetProductAllGtin(params: {
            productId?: number | undefined;
    }): Promise<IProductResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/GetProductAllGtin?";
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

        const transformedOptions = await this.transformOptions(options_);
        const response = await  this.http.fetch(url_, transformedOptions);
        const processed = await this.processGetProductAllGtin(response);
        return processed;
    }

    protected async processGetProductAllGtin(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZProductResponse.parse(resultData200);
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
    * @operationId Product_GetProductAllUpc
    * @tag Product
    * @path /api/Product/GetProductAllUpc 
    * @anonymous false
    */
    async GetProductAllUpc(params: {
            productId?: number | undefined;
    }): Promise<IProductResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/GetProductAllUpc?";
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

        const transformedOptions = await this.transformOptions(options_);
        const response = await  this.http.fetch(url_, transformedOptions);
        const processed = await this.processGetProductAllUpc(response);
        return processed;
    }

    protected async processGetProductAllUpc(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZProductResponse.parse(resultData200);
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
    * @operationId Product_CreateSelectProductUpload
    * @tag Product
    * @path /api/Product/CreateSelectProductUpload 
    * @anonymous false
    * @role Super Admin
    * @role Cooperative Admin
    * @role District Admin
    */
    async CreateSelectProductUpload(params: {
            schoolDistrictId?: number | undefined;
            UserId?: number | undefined;
            Option?: string | undefined;
        body?: ISelectPrdFileupload | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.SelectPrdFileupload        
    }): Promise<IFileUploadResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/CreateSelectProductUpload?";
        const { schoolDistrictId, UserId, Option,  } = params;
        if (schoolDistrictId === null)
            throw new Error("The parameter 'schoolDistrictId' cannot be null.");
        else if (schoolDistrictId !== undefined)
            url_ += "schoolDistrictId=" + encodeURIComponent("" + id) + "&";
        if (UserId === null)
            throw new Error("The parameter 'UserId' cannot be null.");
        else if (UserId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + id) + "&";
        if (Option === null)
            throw new Error("The parameter 'Option' cannot be null.");
        else if (Option !== undefined)
            url_ += "Option=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processCreateSelectProductUpload(response);
        return processed;
    }

    protected async processCreateSelectProductUpload(response: Response): Promise<IFileUploadResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZFileUploadResponse.parse(resultData200);
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
    * @operationId Product_SaveSelectProductUpload
    * @tag Product
    * @path /api/Product/SaveSelectProductUpload 
    * @anonymous false
    * @role Super Admin
    * @role Cooperative Admin
    * @role District Admin
    */
    async SaveSelectProductUpload(params: {
        body?: ISelectProductSaveCheckListRequestModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.SelectProductSaveCheckListRequestModel        
    }): Promise<IFileUploadResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/SaveSelectProductUpload?";
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
        const processed = await this.processSaveSelectProductUpload(response);
        return processed;
    }

    protected async processSaveSelectProductUpload(response: Response): Promise<IFileUploadResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZFileUploadResponse.parse(resultData200);
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
    * @operationId Product_UploadFileWithOCR
    * @tag Product
    * @path /api/Product/UploadFileWithOCR 
    * @anonymous false
    */
    async UploadFileWithOCR(): Promise<IBaseResponseModel | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/UploadFileWithOCR?";
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
        const processed = await this.processUploadFileWithOCR(response);
        return processed;
    }

    protected async processUploadFileWithOCR(response: Response): Promise<IBaseResponseModel | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZBaseResponseModel.parse(resultData200);
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
    * @operationId Product_CreateProductBeforeApprove
    * @tag Product
    * @path /api/Product/CreateProductBeforeApprove 
    * @anonymous false
    */
    async CreateProductBeforeApprove(): Promise<IProductResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/CreateProductBeforeApprove?";
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
        const processed = await this.processCreateProductBeforeApprove(response);
        return processed;
    }

    protected async processCreateProductBeforeApprove(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZProductResponse.parse(resultData200);
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
    * @operationId Product_GetProductBeforeApproveDataByID
    * @tag Product
    * @path /api/Product/GetProductBeforeApproveDataByID 
    * @anonymous false
    */
    async GetProductBeforeApproveDataByID(params: {
            ProductId?: number | undefined;
    }): Promise<IProductResponse | undefined> 
    { 
        let url_ = this.baseUrl + "/api/Product/GetProductBeforeApproveDataByID?";
        const { ProductId,  } = params;
        if (ProductId === null)
            throw new Error("The parameter 'ProductId' cannot be null.");
        else if (ProductId !== undefined)
            url_ += "ProductId=" + encodeURIComponent("" + id) + "&";
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
        const processed = await this.processGetProductBeforeApproveDataByID(response);
        return processed;
    }

    protected async processGetProductBeforeApproveDataByID(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: Record<string, unknown> = {};
        if (response.headers && response.headers.forEach) {
            response.headers.forEach((v: unknown, k: string) => _headers[k] = v); 
        };
        if (status === 200) {
            const _responseText = await response.text();
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            const result200 = ZProductResponse.parse(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = await response.text();
            if (_responseText !== "") {
                const resultData200 = JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            }
        }
    }
}
