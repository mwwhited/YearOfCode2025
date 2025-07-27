//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

// Models 
import type {
    ISuggestedProductRequestModel,
    ISuggestedProductResponseModel,
 } from "./Models";
 
export type {
    ISuggestedProductRequestModel,
    ISuggestedProductResponseModel,
 };

export default interface ISuggestedProductClient {
    /**
    * @operationId SuggestedProduct_CreateSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/CreateSuggestedProduct 
    * @anonymous false
    * @role Super Admin
    * @role District Admin
    * @role Cooperative Admin
    */
    CreateSuggestedProduct(params: {
        body?: ISuggestedProductRequestModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.SuggestedProduct.SuggestedProductRequestModel        
    }): Promise<ISuggestedProductResponseModel | undefined>;
    /**
    * @operationId SuggestedProduct_ApproveSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/ApproveSuggestedProduct 
    * @anonymous false
    * @role Super Admin
    */
    ApproveSuggestedProduct(): Promise<ISuggestedProductResponseModel | undefined>;
}