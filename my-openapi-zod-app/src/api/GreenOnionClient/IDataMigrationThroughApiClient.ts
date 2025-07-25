//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IDataMigrationThroughApiResponseModel } from "./IDataMigrationThroughApiResponseModel";

export type { IDataMigrationThroughApiResponseModel };

type integer = number;

export interface IDataMigrationThroughApiClient {

    /**
    *
    * 
    *
    * @description 
    * @operationId DataMigrationThroughApi_ProductH7DataMigration
    * @tag DataMigrationThroughApi
    * @path /api/DataMigrationThroughApi/ProductH7DataMigration
    */
    ProductH7DataMigration(params: {
    }): Promise<IDataMigrationThroughApiResponseModel>; // #/components/schemas/GreenOnion.Common.GreenOnionModel.ResponseModel.DataMigrationThroughApi.DataMigrationThroughApiResponseModel
    

}
