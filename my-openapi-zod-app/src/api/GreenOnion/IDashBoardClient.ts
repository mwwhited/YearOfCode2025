//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

// Models 
import type {
    IDashBoardResponseModel,
 } from "./Models";
 
export type {
    IDashBoardResponseModel,
 };

export default interface IDashBoardClient {
    /**
    * @operationId DashBoard_GetDashBoardList
    * @tag DashBoard
    * @path /api/DashBoard/GetDashBoardProductList 
    * @anonymous false
    */
    GetDashBoardList(params: {
            userId?: number | undefined;
    }): Promise<IDashBoardResponseModel | undefined>;
    /**
    * @operationId DashBoard_GetDashBoardTotalCountList
    * @tag DashBoard
    * @path /api/DashBoard/GetDashBoardTotalCountList 
    * @anonymous false
    */
    GetDashBoardTotalCountList(params: {
            userId?: number | undefined;
    }): Promise<IDashBoardResponseModel | undefined>;
    /**
    * @operationId DashBoard_GetDistrictFreeOfIOCProductList
    * @tag DashBoard
    * @path /api/DashBoard/GetDistrictFreeOfIOCProductList 
    * @anonymous false
    */
    GetDistrictFreeOfIOCProductList(params: {
            userId?: number | undefined;
    }): Promise<IDashBoardResponseModel | undefined>;
    /**
    * @operationId DashBoard_GetDistrictFreeOfIOCProductReplacesList
    * @tag DashBoard
    * @path /api/DashBoard/GetDistrictFreeOfIOCProductReplacesList 
    * @anonymous false
    */
    GetDistrictFreeOfIOCProductReplacesList(params: {
            userId?: number | undefined;
    }): Promise<IDashBoardResponseModel | undefined>;
    /**
    * @operationId DashBoard_GetManufactureTotalProductChart
    * @tag DashBoard
    * @path /api/DashBoard/GetManufactureTotalProductChart 
    * @anonymous false
    * @role Manufacturer User
    */
    GetManufactureTotalProductChart(): Promise<IDashBoardResponseModel | undefined>;
}