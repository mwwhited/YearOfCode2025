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
import type { IProductClient } from "./IProductClient";

type integer = number;

// Models 
import { QueryProductModelSearchQuery } from "./QueryProductModelSearchQuery";
import type { IQueryProductModelSearchQuery } from "./IQueryProductModelSearchQuery";
import { QueryProductModelPagedQueryResult } from "./QueryProductModelPagedQueryResult";
import type { IQueryProductModelPagedQueryResult } from "./IQueryProductModelPagedQueryResult";
import { QueryProductModel } from "./QueryProductModel";
import type { IQueryProductModel } from "./IQueryProductModel";
import { ContentReference } from "./ContentReference";
import type { IContentReference } from "./IContentReference";
import { ProductResponse } from "./ProductResponse";
import type { IProductResponse } from "./IProductResponse";
import { ProductGtinAllocationModel } from "./ProductGtinAllocationModel";
import type { IProductGtinAllocationModel } from "./IProductGtinAllocationModel";
import { ProductUpcAllocationModel } from "./ProductUpcAllocationModel";
import type { IProductUpcAllocationModel } from "./IProductUpcAllocationModel";
import { FileUploadResponse } from "./FileUploadResponse";
import type { IFileUploadResponse } from "./IFileUploadResponse";
import { SelectProductSaveCheckListRequestModel } from "./SelectProductSaveCheckListRequestModel";
import type { ISelectProductSaveCheckListRequestModel } from "./ISelectProductSaveCheckListRequestModel";
import { BaseResponseModel } from "./BaseResponseModel";
import type { IBaseResponseModel } from "./IBaseResponseModel";

// Exports
export type { IProductClient };

export type { IQueryProductModelSearchQuery };
export type { IQueryProductModelPagedQueryResult };
export type { IQueryProductModel };
export type { IContentReference };
export type { IProductResponse };
export type { IProductGtinAllocationModel };
export type { IProductUpcAllocationModel };
export type { IFileUploadResponse };
export type { ISelectProductSaveCheckListRequestModel };
export type { IBaseResponseModel };

export class ProductClient extends ClientBase implements IProductClient  {
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
    * Query **QueryProductModel**
    *
    * @description Query **QueryProductModel**
    * @operationId Product_Query
    * @tag Product
    * @tag model-query
    * @path /api/Product/Query
    */
    Query(params: {
        body?: IQueryProductModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryProductModelSearchQuery
    }): Promise<IQueryProductModelPagedQueryResult> { // #/components/schemas/GreenOnion.Common.Models.QueryProductModelPagedQueryResult        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Product/Query?";
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

    protected processQuery(response: Response): Promise<QueryProductModelPagedQueryResult> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryProductModelPagedQueryResult.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryProductModelPagedQueryResult>(null as any);
    }
    
    
    /**
    *
    * Get **QueryProductModel**
    *
    * @description Get **QueryProductModel**
    * @operationId Product_Get
    * @tag Product
    * @tag model-getter
    * @path /api/Product/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            gtin?: string | undefined; // 
            upc?: string | undefined; // 
    }): Promise<IQueryProductModel> {
        const { id, gtin, upc,  } = params;
        let url_ = this.baseUrl + "/api/Product/Get?";
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

    protected processGet(response: Response): Promise<QueryProductModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryProductModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryProductModel>(null as any);
    }
    /**
    *
    * Save **QueryProductModel**
    *
    * @description Save **QueryProductModel**
    * @operationId Product_Save
    * @tag Product
    * @tag model-setter
    * @path /api/Product/Save
    */
    Save(params: {
            ProductId?: integer | undefined; // 
            ProductName?: string | undefined; // 
            Gtin?: string | undefined; // 
            Upc?: string | undefined; // 
            CategoryId?: integer | undefined; // 
            SubCategoryId?: integer | undefined; // 
            IocCategoryId?: integer | undefined; // 
            Ingredients?: string | undefined; // 
            BrandName?: string | undefined; // 
            Description?: string | undefined; // 
            AllergenKeywords?: string | undefined; // 
            Vendor?: string | undefined; // 
            ManufacturerId?: integer | undefined; // 
            StorageTypeId?: integer | undefined; // 
            ProductLabelPdfUrl?: string | undefined; // 
            ManufacturerProductCode?: string | undefined; // 
            IsActive?: boolean | undefined; // 
            NutritionalInformation.Serving?: number | undefined; // 
            NutritionalInformation.ServingUom?: string | undefined; // 
            NutritionalInformation.Calories?: number | undefined; // 
            NutritionalInformation.CaloriesUom?: string | undefined; // 
            NutritionalInformation.Carbohydrates?: number | undefined; // 
            NutritionalInformation.CarbohydratesUom?: string | undefined; // 
            NutritionalInformation.Protein?: number | undefined; // 
            NutritionalInformation.ProteinUom?: string | undefined; // 
            NutritionalInformation.TotalFat?: number | undefined; // 
            NutritionalInformation.TransFat?: number | undefined; // 
            NutritionalInformation.SaturatedFat?: number | undefined; // 
            NutritionalInformation.DietaryFiber?: number | undefined; // 
            NutritionalInformation.DietaryFiberUom?: string | undefined; // 
            NutritionalInformation.Sugar?: number | undefined; // 
            NutritionalInformation.SugarUom?: string | undefined; // 
            NutritionalInformation.AddedSugar?: number | undefined; // 
            NutritionalInformation.AddedSugarUom?: string | undefined; // 
            NutritionalInformation.Sodium?: number | undefined; // 
            NutritionalInformation.SodiumUom?: string | undefined; // 
            NutritionalInformation.Cholesterol?: number | undefined; // 
            NutritionalInformation.CholesterolUom?: string | undefined; // 
    }): Promise<IQueryProductModel> { // #/components/schemas/GreenOnion.Common.Models.QueryProductModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Product/Save?";
        const { ProductId, ProductName, Gtin, Upc, CategoryId, SubCategoryId, IocCategoryId, Ingredients, BrandName, Description, AllergenKeywords, Vendor, ManufacturerId, StorageTypeId, ProductLabelPdfUrl, ManufacturerProductCode, IsActive, NutritionalInformation.Serving, NutritionalInformation.ServingUom, NutritionalInformation.Calories, NutritionalInformation.CaloriesUom, NutritionalInformation.Carbohydrates, NutritionalInformation.CarbohydratesUom, NutritionalInformation.Protein, NutritionalInformation.ProteinUom, NutritionalInformation.TotalFat, NutritionalInformation.TransFat, NutritionalInformation.SaturatedFat, NutritionalInformation.DietaryFiber, NutritionalInformation.DietaryFiberUom, NutritionalInformation.Sugar, NutritionalInformation.SugarUom, NutritionalInformation.AddedSugar, NutritionalInformation.AddedSugarUom, NutritionalInformation.Sodium, NutritionalInformation.SodiumUom, NutritionalInformation.Cholesterol, NutritionalInformation.CholesterolUom,  } = params;
        if (ProductId === null)
            throw new Error("The parameter 'ProductId' cannot be null.");
        else if (ProductId !== undefined)
            url_ += "ProductId=" + encodeURIComponent("" + id) + "&";
        if (ProductName === null)
            throw new Error("The parameter 'ProductName' cannot be null.");
        else if (ProductName !== undefined)
            url_ += "ProductName=" + encodeURIComponent("" + id) + "&";
        if (Gtin === null)
            throw new Error("The parameter 'Gtin' cannot be null.");
        else if (Gtin !== undefined)
            url_ += "Gtin=" + encodeURIComponent("" + id) + "&";
        if (Upc === null)
            throw new Error("The parameter 'Upc' cannot be null.");
        else if (Upc !== undefined)
            url_ += "Upc=" + encodeURIComponent("" + id) + "&";
        if (CategoryId === null)
            throw new Error("The parameter 'CategoryId' cannot be null.");
        else if (CategoryId !== undefined)
            url_ += "CategoryId=" + encodeURIComponent("" + id) + "&";
        if (SubCategoryId === null)
            throw new Error("The parameter 'SubCategoryId' cannot be null.");
        else if (SubCategoryId !== undefined)
            url_ += "SubCategoryId=" + encodeURIComponent("" + id) + "&";
        if (IocCategoryId === null)
            throw new Error("The parameter 'IocCategoryId' cannot be null.");
        else if (IocCategoryId !== undefined)
            url_ += "IocCategoryId=" + encodeURIComponent("" + id) + "&";
        if (Ingredients === null)
            throw new Error("The parameter 'Ingredients' cannot be null.");
        else if (Ingredients !== undefined)
            url_ += "Ingredients=" + encodeURIComponent("" + id) + "&";
        if (BrandName === null)
            throw new Error("The parameter 'BrandName' cannot be null.");
        else if (BrandName !== undefined)
            url_ += "BrandName=" + encodeURIComponent("" + id) + "&";
        if (Description === null)
            throw new Error("The parameter 'Description' cannot be null.");
        else if (Description !== undefined)
            url_ += "Description=" + encodeURIComponent("" + id) + "&";
        if (AllergenKeywords === null)
            throw new Error("The parameter 'AllergenKeywords' cannot be null.");
        else if (AllergenKeywords !== undefined)
            url_ += "AllergenKeywords=" + encodeURIComponent("" + id) + "&";
        if (Vendor === null)
            throw new Error("The parameter 'Vendor' cannot be null.");
        else if (Vendor !== undefined)
            url_ += "Vendor=" + encodeURIComponent("" + id) + "&";
        if (ManufacturerId === null)
            throw new Error("The parameter 'ManufacturerId' cannot be null.");
        else if (ManufacturerId !== undefined)
            url_ += "ManufacturerId=" + encodeURIComponent("" + id) + "&";
        if (StorageTypeId === null)
            throw new Error("The parameter 'StorageTypeId' cannot be null.");
        else if (StorageTypeId !== undefined)
            url_ += "StorageTypeId=" + encodeURIComponent("" + id) + "&";
        if (ProductLabelPdfUrl === null)
            throw new Error("The parameter 'ProductLabelPdfUrl' cannot be null.");
        else if (ProductLabelPdfUrl !== undefined)
            url_ += "ProductLabelPdfUrl=" + encodeURIComponent("" + id) + "&";
        if (ManufacturerProductCode === null)
            throw new Error("The parameter 'ManufacturerProductCode' cannot be null.");
        else if (ManufacturerProductCode !== undefined)
            url_ += "ManufacturerProductCode=" + encodeURIComponent("" + id) + "&";
        if (IsActive === null)
            throw new Error("The parameter 'IsActive' cannot be null.");
        else if (IsActive !== undefined)
            url_ += "IsActive=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.Serving === null)
            throw new Error("The parameter 'NutritionalInformation.Serving' cannot be null.");
        else if (NutritionalInformation.Serving !== undefined)
            url_ += "NutritionalInformation.Serving=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.ServingUom === null)
            throw new Error("The parameter 'NutritionalInformation.ServingUom' cannot be null.");
        else if (NutritionalInformation.ServingUom !== undefined)
            url_ += "NutritionalInformation.ServingUom=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.Calories === null)
            throw new Error("The parameter 'NutritionalInformation.Calories' cannot be null.");
        else if (NutritionalInformation.Calories !== undefined)
            url_ += "NutritionalInformation.Calories=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.CaloriesUom === null)
            throw new Error("The parameter 'NutritionalInformation.CaloriesUom' cannot be null.");
        else if (NutritionalInformation.CaloriesUom !== undefined)
            url_ += "NutritionalInformation.CaloriesUom=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.Carbohydrates === null)
            throw new Error("The parameter 'NutritionalInformation.Carbohydrates' cannot be null.");
        else if (NutritionalInformation.Carbohydrates !== undefined)
            url_ += "NutritionalInformation.Carbohydrates=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.CarbohydratesUom === null)
            throw new Error("The parameter 'NutritionalInformation.CarbohydratesUom' cannot be null.");
        else if (NutritionalInformation.CarbohydratesUom !== undefined)
            url_ += "NutritionalInformation.CarbohydratesUom=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.Protein === null)
            throw new Error("The parameter 'NutritionalInformation.Protein' cannot be null.");
        else if (NutritionalInformation.Protein !== undefined)
            url_ += "NutritionalInformation.Protein=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.ProteinUom === null)
            throw new Error("The parameter 'NutritionalInformation.ProteinUom' cannot be null.");
        else if (NutritionalInformation.ProteinUom !== undefined)
            url_ += "NutritionalInformation.ProteinUom=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.TotalFat === null)
            throw new Error("The parameter 'NutritionalInformation.TotalFat' cannot be null.");
        else if (NutritionalInformation.TotalFat !== undefined)
            url_ += "NutritionalInformation.TotalFat=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.TransFat === null)
            throw new Error("The parameter 'NutritionalInformation.TransFat' cannot be null.");
        else if (NutritionalInformation.TransFat !== undefined)
            url_ += "NutritionalInformation.TransFat=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.SaturatedFat === null)
            throw new Error("The parameter 'NutritionalInformation.SaturatedFat' cannot be null.");
        else if (NutritionalInformation.SaturatedFat !== undefined)
            url_ += "NutritionalInformation.SaturatedFat=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.DietaryFiber === null)
            throw new Error("The parameter 'NutritionalInformation.DietaryFiber' cannot be null.");
        else if (NutritionalInformation.DietaryFiber !== undefined)
            url_ += "NutritionalInformation.DietaryFiber=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.DietaryFiberUom === null)
            throw new Error("The parameter 'NutritionalInformation.DietaryFiberUom' cannot be null.");
        else if (NutritionalInformation.DietaryFiberUom !== undefined)
            url_ += "NutritionalInformation.DietaryFiberUom=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.Sugar === null)
            throw new Error("The parameter 'NutritionalInformation.Sugar' cannot be null.");
        else if (NutritionalInformation.Sugar !== undefined)
            url_ += "NutritionalInformation.Sugar=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.SugarUom === null)
            throw new Error("The parameter 'NutritionalInformation.SugarUom' cannot be null.");
        else if (NutritionalInformation.SugarUom !== undefined)
            url_ += "NutritionalInformation.SugarUom=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.AddedSugar === null)
            throw new Error("The parameter 'NutritionalInformation.AddedSugar' cannot be null.");
        else if (NutritionalInformation.AddedSugar !== undefined)
            url_ += "NutritionalInformation.AddedSugar=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.AddedSugarUom === null)
            throw new Error("The parameter 'NutritionalInformation.AddedSugarUom' cannot be null.");
        else if (NutritionalInformation.AddedSugarUom !== undefined)
            url_ += "NutritionalInformation.AddedSugarUom=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.Sodium === null)
            throw new Error("The parameter 'NutritionalInformation.Sodium' cannot be null.");
        else if (NutritionalInformation.Sodium !== undefined)
            url_ += "NutritionalInformation.Sodium=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.SodiumUom === null)
            throw new Error("The parameter 'NutritionalInformation.SodiumUom' cannot be null.");
        else if (NutritionalInformation.SodiumUom !== undefined)
            url_ += "NutritionalInformation.SodiumUom=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.Cholesterol === null)
            throw new Error("The parameter 'NutritionalInformation.Cholesterol' cannot be null.");
        else if (NutritionalInformation.Cholesterol !== undefined)
            url_ += "NutritionalInformation.Cholesterol=" + encodeURIComponent("" + id) + "&";
        if (NutritionalInformation.CholesterolUom === null)
            throw new Error("The parameter 'NutritionalInformation.CholesterolUom' cannot be null.");
        else if (NutritionalInformation.CholesterolUom !== undefined)
            url_ += "NutritionalInformation.CholesterolUom=" + encodeURIComponent("" + id) + "&";
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

    protected processSave(response: Response): Promise<QueryProductModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = QueryProductModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<QueryProductModel>(null as any);
    }
    
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_Pdfs
    * @tag Product
    * @path /api/Product/Pdfs/{id}
    */
    {id}(params: {
            id?: string | undefined; // 
            download?: boolean | undefined; // 
    }): Promise<IContentReference> {
        const { id, download,  } = params;
        let url_ = this.baseUrl + "/api/Product/Pdfs/{id}?";
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
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.process{id}(_response);
        });
    }

    protected process{id}(response: Response): Promise<ContentReference> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ContentReference.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentReference>(null as any);
    }
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_CreateProduct
    * @tag Product
    * @path /api/Product/CreateProduct
    */
    CreateProduct(params: {
    }): Promise<IProductResponse> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.ProductResponse        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Product/CreateProduct?";
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
            return this.processCreateProduct(_response);
        });
    }

    protected processCreateProduct(response: Response): Promise<ProductResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductResponse>(null as any);
    }
    
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_GetProductDataByID
    * @tag Product
    * @path /api/Product/GetProductDataByID
    */
    GetProductDataByID(params: {
            ProductId?: integer | undefined; // 
    }): Promise<IProductResponse> {
        const { ProductId,  } = params;
        let url_ = this.baseUrl + "/api/Product/GetProductDataByID?";
        if (ProductId === null)
            throw new Error("The parameter 'ProductId' cannot be null.");
        else if (ProductId !== undefined)
            url_ += "ProductId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetProductDataByID(_response);
        });
    }

    protected processGetProductDataByID(response: Response): Promise<ProductResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductResponse>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_CreateUpdateGtinAllocation
    * @tag Product
    * @path /api/Product/CreateUpdateGtinAllocation
    */
    CreateUpdateGtinAllocation(params: {
        body?: IProductGtinAllocationModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.ProductGtinAllocationModel
    }): Promise<IProductResponse> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.ProductResponse        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Product/CreateUpdateGtinAllocation?";
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
            return this.processCreateUpdateGtinAllocation(_response);
        });
    }

    protected processCreateUpdateGtinAllocation(response: Response): Promise<ProductResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductResponse>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_CreateUpdateUpcAllocation
    * @tag Product
    * @path /api/Product/CreateUpdateUpcAllocation
    */
    CreateUpdateUpcAllocation(params: {
        body?: IProductUpcAllocationModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.ProductUpcAllocationModel
    }): Promise<IProductResponse> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.ProductResponse        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Product/CreateUpdateUpcAllocation?";
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
            return this.processCreateUpdateUpcAllocation(_response);
        });
    }

    protected processCreateUpdateUpcAllocation(response: Response): Promise<ProductResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductResponse>(null as any);
    }
    
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_GetProductAllGtin
    * @tag Product
    * @path /api/Product/GetProductAllGtin
    */
    GetProductAllGtin(params: {
            productId?: integer | undefined; // 
    }): Promise<IProductResponse> {
        const { productId,  } = params;
        let url_ = this.baseUrl + "/api/Product/GetProductAllGtin?";
        if (productId === null)
            throw new Error("The parameter 'productId' cannot be null.");
        else if (productId !== undefined)
            url_ += "productId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetProductAllGtin(_response);
        });
    }

    protected processGetProductAllGtin(response: Response): Promise<ProductResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductResponse>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_GetProductAllUpc
    * @tag Product
    * @path /api/Product/GetProductAllUpc
    */
    GetProductAllUpc(params: {
            productId?: integer | undefined; // 
    }): Promise<IProductResponse> {
        const { productId,  } = params;
        let url_ = this.baseUrl + "/api/Product/GetProductAllUpc?";
        if (productId === null)
            throw new Error("The parameter 'productId' cannot be null.");
        else if (productId !== undefined)
            url_ += "productId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetProductAllUpc(_response);
        });
    }

    protected processGetProductAllUpc(response: Response): Promise<ProductResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductResponse>(null as any);
    }
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_CreateSelectProductUpload
    * @tag Product
    * @path /api/Product/CreateSelectProductUpload
    */
    CreateSelectProductUpload(params: {
            schoolDistrictId?: integer | undefined; // 
            UserId?: integer | undefined; // 
            Option?: string | undefined; // 
    }): Promise<IFileUploadResponse> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.FileUploadResponse        
        const { body } = params;
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

    protected processCreateSelectProductUpload(response: Response): Promise<FileUploadResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = FileUploadResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileUploadResponse>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_SaveSelectProductUpload
    * @tag Product
    * @path /api/Product/SaveSelectProductUpload
    */
    SaveSelectProductUpload(params: {
        body?: ISelectProductSaveCheckListRequestModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.SelectProductSaveCheckListRequestModel
    }): Promise<IFileUploadResponse> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.FileUploadResponse        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Product/SaveSelectProductUpload?";
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
            return this.processSaveSelectProductUpload(_response);
        });
    }

    protected processSaveSelectProductUpload(response: Response): Promise<FileUploadResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = FileUploadResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileUploadResponse>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_UploadFileWithOCR
    * @tag Product
    * @path /api/Product/UploadFileWithOCR
    */
    UploadFileWithOCR(params: {
    }): Promise<IBaseResponseModel> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.BaseResponse.BaseResponseModel        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Product/UploadFileWithOCR?";
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
            return this.processUploadFileWithOCR(_response);
        });
    }

    protected processUploadFileWithOCR(response: Response): Promise<BaseResponseModel> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BaseResponseModel.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BaseResponseModel>(null as any);
    }
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_CreateProductBeforeApprove
    * @tag Product
    * @path /api/Product/CreateProductBeforeApprove
    */
    CreateProductBeforeApprove(params: {
    }): Promise<IProductResponse> { // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.ProductResponse        
        const { body } = params;
        let url_ = this.baseUrl + "/api/Product/CreateProductBeforeApprove?";
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
            return this.processCreateProductBeforeApprove(_response);
        });
    }

    protected processCreateProductBeforeApprove(response: Response): Promise<ProductResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductResponse>(null as any);
    }
    
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Product_GetProductBeforeApproveDataByID
    * @tag Product
    * @path /api/Product/GetProductBeforeApproveDataByID
    */
    GetProductBeforeApproveDataByID(params: {
            ProductId?: integer | undefined; // 
    }): Promise<IProductResponse> {
        const { ProductId,  } = params;
        let url_ = this.baseUrl + "/api/Product/GetProductBeforeApproveDataByID?";
        if (ProductId === null)
            throw new Error("The parameter 'ProductId' cannot be null.");
        else if (ProductId !== undefined)
            url_ += "ProductId=" + encodeURIComponent("" + id) + "&";
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
            return this.processGetProductBeforeApproveDataByID(_response);
        });
    }

    protected processGetProductBeforeApproveDataByID(response: Response): Promise<ProductResponse> {
        const status = response.status;
        const _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            const resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductResponse.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ProductResponse>(null as any);
    }
    
    
    
}
