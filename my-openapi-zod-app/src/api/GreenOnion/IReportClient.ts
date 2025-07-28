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
    IProductActivityReportFilter,
    IUserResponseModel,
 } from "./Models";
 
export type {
    IProductActivityReportFilter,
    IUserResponseModel,
 };

export default interface IReportClient {
    
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