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
    IDataMigrationThroughApiResponseModel,
 } from "./Models";
 
export type {
    IDataMigrationThroughApiResponseModel,
 };

export default interface IDataMigrationThroughApiClient {
    /**
    * @operationId DataMigrationThroughApi_ProductH7DataMigration
    * @tag DataMigrationThroughApi
    * @path /api/DataMigrationThroughApi/ProductH7DataMigration 
    * @anonymous false
    * @role Super Admin
    */
    ProductH7DataMigration(): Promise<IDataMigrationThroughApiResponseModel | undefined>;
}