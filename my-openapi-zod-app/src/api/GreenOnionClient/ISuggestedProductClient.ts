//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { ISuggestedProductRequestModel } from "./ISuggestedProductRequestModel";
import type { ISuggestedProductResponseModel } from "./ISuggestedProductResponseModel";

export type { ISuggestedProductRequestModel };
export type { ISuggestedProductResponseModel };

type integer = number;

export interface ISuggestedProductClient {

    /**
    *
    * 
    *
    * @description 
    * @operationId SuggestedProduct_CreateSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/CreateSuggestedProduct
    */
    CreateSuggestedProduct(params: {
        body?: ISuggestedProductRequestModel | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.SuggestedProduct.SuggestedProductRequestModel
    }): Promise<ISuggestedProductResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.SuggestedProduct.SuggestedProductResponseModel
    
    /**
    *
    * 
    *
    * @description 
    * @operationId SuggestedProduct_ApproveSuggestedProduct
    * @tag SuggestedProduct
    * @path /api/SuggestedProduct/ApproveSuggestedProduct
    */
    ApproveSuggestedProduct(params: {
    }): Promise<ISuggestedProductResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.SuggestedProduct.SuggestedProductResponseModel
    

}
