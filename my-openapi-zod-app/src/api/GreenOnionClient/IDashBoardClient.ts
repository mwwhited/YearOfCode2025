//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IDashBoardResponseModel } from "./IDashBoardResponseModel";

export type { IDashBoardResponseModel };

type integer = number;

export interface IDashBoardClient {

    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetDashBoardList
    * @tag DashBoard
    * @path /api/DashBoard/GetDashBoardProductList
    */
    GetDashBoardProductList(params: {
            userId?: integer | undefined; // 
    }): Promise<IDashBoardResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel
    
    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetDashBoardTotalCountList
    * @tag DashBoard
    * @path /api/DashBoard/GetDashBoardTotalCountList
    */
    GetDashBoardTotalCountList(params: {
            userId?: integer | undefined; // 
    }): Promise<IDashBoardResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel
    
    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetDistrictFreeOfIOCProductList
    * @tag DashBoard
    * @path /api/DashBoard/GetDistrictFreeOfIOCProductList
    */
    GetDistrictFreeOfIOCProductList(params: {
            userId?: integer | undefined; // 
    }): Promise<IDashBoardResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel
    
    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetDistrictFreeOfIOCProductReplacesList
    * @tag DashBoard
    * @path /api/DashBoard/GetDistrictFreeOfIOCProductReplacesList
    */
    GetDistrictFreeOfIOCProductReplacesList(params: {
            userId?: integer | undefined; // 
    }): Promise<IDashBoardResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel
    
    /**
    *
    * 
    *
    * @description 
    * @operationId DashBoard_GetManufactureTotalProductChart
    * @tag DashBoard
    * @path /api/DashBoard/GetManufactureTotalProductChart
    */
    GetManufactureTotalProductChart(params: {
    }): Promise<IDashBoardResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DashBoard.DashBoardResponseModel
    

}
