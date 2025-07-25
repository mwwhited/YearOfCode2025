//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IProductActivityReportFilter } from "./IProductActivityReportFilter";
import type { IUserResponseModel } from "./IUserResponseModel";

export type { IProductActivityReportFilter };
export type { IUserResponseModel };

type integer = number;

export interface IReportClient {

    /**
    *
    * 
    *
    * @description 
    * @operationId Report_GetProductActivityReportFilter
    * @tag Report
    * @path /api/Report/GetProductActivityReportFilter
    */
    GetProductActivityReportFilter(params: {
        body?: IProductActivityReportFilter | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Reports.ProductActivityReportFilter
    }): Promise<IUserResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.UserResponse.UserResponseModel
    
    /**
    *
    * 
    *
    * @description 
    * @operationId Report_GetItemDetailByProductIdReport
    * @tag Report
    * @path /api/Report/GetItemDetailByProductIdReport
    */
    GetItemDetailByProductIdReport(params: {
            productId?: integer | undefined; // 
    }): Promise<IUserResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.UserResponse.UserResponseModel
    

}
