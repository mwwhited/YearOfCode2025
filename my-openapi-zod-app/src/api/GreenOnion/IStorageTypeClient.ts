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
    IQueryStorageTypeModelSearchQuery,
    IQueryStorageTypeModelPagedQueryResult,
    IQueryStorageTypeModel,
    ISaveStorageTypeModel,
 } from "./Models";
 
export type {
    IQueryStorageTypeModelSearchQuery,
    IQueryStorageTypeModelPagedQueryResult,
    IQueryStorageTypeModel,
    ISaveStorageTypeModel,
 };

export default interface IStorageTypeClient {
    
    /**
    * Query **QueryStorageTypeModel**
    * @description Query **QueryStorageTypeModel**
    * @operationId StorageType_Query
    * @tag StorageType
    * @tag model-query
    * @path /api/StorageType/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryStorageTypeModel
    */
    Query(params: {
        body?: IQueryStorageTypeModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryStorageTypeModelSearchQuery        
    }): Promise<IQueryStorageTypeModelPagedQueryResult | undefined>;
    
    /**
    * Get **QueryStorageTypeModel**
    * @description Get **QueryStorageTypeModel**
    * @operationId StorageType_Get
    * @tag StorageType
    * @tag model-getter
    * @path /api/StorageType/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryStorageTypeModel
    */ 
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQueryStorageTypeModel | undefined>;
    
    /**
    * Save **QueryStorageTypeModel**
    * @description Save **QueryStorageTypeModel**
    * @operationId StorageType_Save
    * @tag StorageType
    * @tag model-setter
    * @path /api/StorageType/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryStorageTypeModel
    */
    Save(params: {
        body?: ISaveStorageTypeModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveStorageTypeModel        
    }): Promise<IQueryStorageTypeModel | undefined>;
}