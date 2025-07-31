//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

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
 } from "./Models";

export type { 
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

export default interface IProductClient {
    
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
        body?: IQueryProductModelSearchQuery | undefined;
    }): Promise<IQueryProductModelPagedQueryResult | undefined>;
    
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
    }): Promise<IQueryProductModel | undefined>;
    
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
        body?: ISaveProductModel | undefined;
    }): Promise<IQueryProductModel | undefined>;
    
    /**
    * @operationId Product_Pdfs
    * @tag Product
    * @path /api/Product/Pdfs/{id} 
    * @anonymous false
    */
    Pdfs(params: {
            id?: string | undefined;
            download?: boolean | undefined;
    }): Promise<IContentReference | undefined>;
    
    /**
    * @operationId Product_CreateProduct
    * @tag Product
    * @path /api/Product/CreateProduct 
    * @anonymous false
    */
    CreateProduct(): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_GetProductDataByID
    * @tag Product
    * @path /api/Product/GetProductDataByID 
    * @anonymous false
    */
    GetProductDataByID(params: {
            ProductId?: number | undefined;
    }): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_DeleteProductData
    * @tag Product
    * @path /api/Product/DeleteProductData 
    * @anonymous false
    */
    DeleteProductData(params: {
            ProductId?: number | undefined;
            schoolDistrictId?: number | undefined;
    }): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_CreateUpdateGtinAllocation
    * @tag Product
    * @path /api/Product/CreateUpdateGtinAllocation 
    * @anonymous false
    */
    CreateUpdateGtinAllocation(params: {
        body?: IProductGtinAllocationModel | undefined;
    }): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_CreateUpdateUpcAllocation
    * @tag Product
    * @path /api/Product/CreateUpdateUpcAllocation 
    * @anonymous false
    */
    CreateUpdateUpcAllocation(params: {
        body?: IProductUpcAllocationModel | undefined;
    }): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_GetProductAllGtin
    * @tag Product
    * @path /api/Product/GetProductAllGtin 
    * @anonymous false
    */
    GetProductAllGtin(params: {
            productId?: number | undefined;
    }): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_GetProductAllUpc
    * @tag Product
    * @path /api/Product/GetProductAllUpc 
    * @anonymous false
    */
    GetProductAllUpc(params: {
            productId?: number | undefined;
    }): Promise<IProductResponse | undefined>;
    
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
        body?: ISelectPrdFileupload | undefined;
    }): Promise<IFileUploadResponse | undefined>;
    
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
        body?: ISelectProductSaveCheckListRequestModel | undefined;
    }): Promise<IFileUploadResponse | undefined>;
    
    /**
    * @operationId Product_UploadFileWithOCR
    * @tag Product
    * @path /api/Product/UploadFileWithOCR 
    * @anonymous false
    */
    UploadFileWithOCR(): Promise<IBaseResponseModel | undefined>;
    
    /**
    * @operationId Product_CreateProductBeforeApprove
    * @tag Product
    * @path /api/Product/CreateProductBeforeApprove 
    * @anonymous false
    */
    CreateProductBeforeApprove(): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_GetProductBeforeApproveDataByID
    * @tag Product
    * @path /api/Product/GetProductBeforeApproveDataByID 
    * @anonymous false
    */
    GetProductBeforeApproveDataByID(params: {
            ProductId?: number | undefined;
    }): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_DeleteProductGtin
    * @tag Product
    * @path /api/Product/DeleteProductGtin 
    * @anonymous false
    */
    DeleteProductGtin(params: {
            productId?: number | undefined;
            gtin?: string | undefined;
    }): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_DeleteProductUpc
    * @tag Product
    * @path /api/Product/DeleteProductUpc 
    * @anonymous false
    */
    DeleteProductUpc(params: {
            productId?: number | undefined;
            upc?: string | undefined;
    }): Promise<IProductResponse | undefined>;
    
    /**
    * @operationId Product_DeleteProductPermanently
    * @tag Product
    * @path /api/Product/DeleteProductPermanently 
    * @anonymous false
    * @role Super Admin
    */
    DeleteProductPermanently(params: {
            ProductId?: number | undefined;
    }): Promise<IProductResponse | undefined>;
}