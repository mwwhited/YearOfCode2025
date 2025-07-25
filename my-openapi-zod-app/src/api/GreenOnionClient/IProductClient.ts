//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryProductModelSearchQuery } from "./Models/IQueryProductModelSearchQuery";
import type { IQueryProductModelPagedQueryResult } from "./Models/IQueryProductModelPagedQueryResult";
import type { IQueryProductModel } from "./Models/IQueryProductModel";
import type { IContentReference } from "./Models/IContentReference";
import type { IProductResponse } from "./Models/IProductResponse";
import type { IProductGtinAllocationModel } from "./Models/IProductGtinAllocationModel";
import type { IProductUpcAllocationModel } from "./Models/IProductUpcAllocationModel";
import type { IFileUploadResponse } from "./Models/IFileUploadResponse";
import type { ISelectProductSaveCheckListRequestModel } from "./Models/ISelectProductSaveCheckListRequestModel";
import type { IBaseResponseModel } from "./Models/IBaseResponseModel";

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

type integer = number;

export interface IProductClient {

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
    }): Promise<IQueryProductModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryProductModelPagedQueryResult
    
    
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
    }): Promise<IQueryProductModel>;
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
    }): Promise<IQueryProductModel>; // #/components/schemas/GreenOnion.Common.Models.QueryProductModel
    
    
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
    }): Promise<IContentReference>;
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
    }): Promise<IProductResponse>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.ProductResponse
    
    
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
    }): Promise<IProductResponse>;
    
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
    }): Promise<IProductResponse>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.ProductResponse
    
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
    }): Promise<IProductResponse>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.ProductResponse
    
    
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
    }): Promise<IProductResponse>;
    
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
    }): Promise<IProductResponse>;
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
    }): Promise<IFileUploadResponse>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.FileUploadResponse
    
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
    }): Promise<IFileUploadResponse>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.FileUploadResponse
    
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
    }): Promise<IBaseResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.BaseResponse.BaseResponseModel
    
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
    }): Promise<IProductResponse>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.Product.ProductResponse
    
    
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
    }): Promise<IProductResponse>;
    
    
    

}
