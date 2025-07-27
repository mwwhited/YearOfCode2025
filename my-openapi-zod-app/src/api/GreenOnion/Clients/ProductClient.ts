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
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : window as any;
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
    Query(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processQuery(_response);
        });
    }

    protected processQuery(response: Response): Promise<IQueryProductModelPagedQueryResult | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryProductModelPagedQueryResult.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryProductModelPagedQueryResult | undefined>(null as any);
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
    Get(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<IQueryProductModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryProductModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryProductModel | undefined>(null as any);
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
    Save(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processSave(_response);
        });
    }

    protected processSave(response: Response): Promise<IQueryProductModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZQueryProductModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IQueryProductModel | undefined>(null as any);
    }
    /**
    * @operationId Product_Pdfs
    * @tag Product
    * @path /api/Product/Pdfs/{id} 
    * @anonymous false
    */
    Pdfs(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processPdfs(_response);
        });
    }

    protected processPdfs(response: Response): Promise<IContentReference | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZContentReference.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IContentReference | undefined>(null as any);
    }
    /**
    * @operationId Product_CreateProduct
    * @tag Product
    * @path /api/Product/CreateProduct 
    * @anonymous false
    */
    CreateProduct(): Promise<IProductResponse | undefined> 
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processCreateProduct(_response);
        });
    }

    protected processCreateProduct(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZProductResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IProductResponse | undefined>(null as any);
    }
    /**
    * @operationId Product_GetProductDataByID
    * @tag Product
    * @path /api/Product/GetProductDataByID 
    * @anonymous false
    */
    GetProductDataByID(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetProductDataByID(_response);
        });
    }

    protected processGetProductDataByID(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZProductResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IProductResponse | undefined>(null as any);
    }
    /**
    * @operationId Product_CreateUpdateGtinAllocation
    * @tag Product
    * @path /api/Product/CreateUpdateGtinAllocation 
    * @anonymous false
    */
    CreateUpdateGtinAllocation(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processCreateUpdateGtinAllocation(_response);
        });
    }

    protected processCreateUpdateGtinAllocation(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZProductResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IProductResponse | undefined>(null as any);
    }
    /**
    * @operationId Product_CreateUpdateUpcAllocation
    * @tag Product
    * @path /api/Product/CreateUpdateUpcAllocation 
    * @anonymous false
    */
    CreateUpdateUpcAllocation(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processCreateUpdateUpcAllocation(_response);
        });
    }

    protected processCreateUpdateUpcAllocation(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZProductResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IProductResponse | undefined>(null as any);
    }
    /**
    * @operationId Product_GetProductAllGtin
    * @tag Product
    * @path /api/Product/GetProductAllGtin 
    * @anonymous false
    */
    GetProductAllGtin(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetProductAllGtin(_response);
        });
    }

    protected processGetProductAllGtin(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZProductResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IProductResponse | undefined>(null as any);
    }
    /**
    * @operationId Product_GetProductAllUpc
    * @tag Product
    * @path /api/Product/GetProductAllUpc 
    * @anonymous false
    */
    GetProductAllUpc(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetProductAllUpc(_response);
        });
    }

    protected processGetProductAllUpc(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZProductResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IProductResponse | undefined>(null as any);
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
    CreateSelectProductUpload(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processCreateSelectProductUpload(_response);
        });
    }

    protected processCreateSelectProductUpload(response: Response): Promise<IFileUploadResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZFileUploadResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IFileUploadResponse | undefined>(null as any);
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
    SaveSelectProductUpload(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processSaveSelectProductUpload(_response);
        });
    }

    protected processSaveSelectProductUpload(response: Response): Promise<IFileUploadResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZFileUploadResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IFileUploadResponse | undefined>(null as any);
    }
    /**
    * @operationId Product_UploadFileWithOCR
    * @tag Product
    * @path /api/Product/UploadFileWithOCR 
    * @anonymous false
    */
    UploadFileWithOCR(): Promise<IBaseResponseModel | undefined> 
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processUploadFileWithOCR(_response);
        });
    }

    protected processUploadFileWithOCR(response: Response): Promise<IBaseResponseModel | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZBaseResponseModel.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IBaseResponseModel | undefined>(null as any);
    }
    /**
    * @operationId Product_CreateProductBeforeApprove
    * @tag Product
    * @path /api/Product/CreateProductBeforeApprove 
    * @anonymous false
    */
    CreateProductBeforeApprove(): Promise<IProductResponse | undefined> 
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processCreateProductBeforeApprove(_response);
        });
    }

    protected processCreateProductBeforeApprove(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZProductResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IProductResponse | undefined>(null as any);
    }
    /**
    * @operationId Product_GetProductBeforeApproveDataByID
    * @tag Product
    * @path /api/Product/GetProductBeforeApproveDataByID 
    * @anonymous false
    */
    GetProductBeforeApproveDataByID(params: {
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

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetProductBeforeApproveDataByID(_response);
        });
    }

    protected processGetProductBeforeApproveDataByID(response: Response): Promise<IProductResponse | undefined>
    {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ZProductResponse.parse(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<IProductResponse | undefined>(null as any);
    }
}
