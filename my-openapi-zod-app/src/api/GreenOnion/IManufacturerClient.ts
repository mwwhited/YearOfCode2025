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
    IQueryManufacturerModelSearchQuery,
    IQueryManufacturerModelPagedQueryResult,
    IQueryManufacturerModel,
    ISaveManufacturerModel,
 } from "./Models";

export type { 
    IQueryManufacturerModelSearchQuery,
    IQueryManufacturerModelPagedQueryResult,
    IQueryManufacturerModel,
    ISaveManufacturerModel,
};

export default interface IManufacturerClient {
    
    /**
    * Query **QueryManufacturerModel**
    * @description Query **QueryManufacturerModel**
    * @operationId Manufacturer_Query
    * @tag Manufacturer
    * @tag model-query
    * @path /api/Manufacturer/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryManufacturerModel
    */
    Query(params: {
        body?: IQueryManufacturerModelSearchQuery | undefined;
    }): Promise<IQueryManufacturerModelPagedQueryResult | undefined>;
    
    /**
    * Get **QueryManufacturerModel**
    * @description Get **QueryManufacturerModel**
    * @operationId Manufacturer_Get
    * @tag Manufacturer
    * @tag model-getter
    * @path /api/Manufacturer/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryManufacturerModel
    */
    Get(params: {
            id?: number | undefined;
            gln?: string | undefined;
    }): Promise<IQueryManufacturerModel | undefined>;
    
    /**
    * Save **QueryManufacturerModel**
    * @description Save **QueryManufacturerModel**
    * @operationId Manufacturer_Save
    * @tag Manufacturer
    * @tag model-setter
    * @path /api/Manufacturer/Save 
    * @anonymous false
    * @role Super Admin
    * @role Manufacturer User
    * @querySet GreenOnion.Common.Models.QueryManufacturerModel
    */
    Save(params: {
        body?: ISaveManufacturerModel | undefined;
    }): Promise<IQueryManufacturerModel | undefined>;
}