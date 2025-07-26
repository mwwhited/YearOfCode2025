//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

type integer = number;

// Models 
import type { IProductActivityReportFilter } from "./Models/IProductActivityReportFilter";
import type { IUserResponseModel } from "./Models/IUserResponseModel";

export type { IProductActivityReportFilter };
export type { IUserResponseModel };

export interface IReportClient {

    /**
    * @operationId Report_GetProductActivityReportFilter
    * @tag Report
    * @path /api/Report/GetProductActivityReportFilter 
    * @anonymous false
    */
    GetProductActivityReportFilter(params: {
        body?: IProductActivityReportFilter | undefined; // #/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Reports.ProductActivityReportFilter        
    }): Promise<IUserResponseModel | undefined>;
    /**
    * @operationId Report_GetItemDetailByProductIdReport
    * @tag Report
    * @path /api/Report/GetItemDetailByProductIdReport 
    * @anonymous false
    */
    GetItemDetailByProductIdReport(params: {
            productId?: number | undefined;
    }): Promise<IUserResponseModel | undefined>;
}