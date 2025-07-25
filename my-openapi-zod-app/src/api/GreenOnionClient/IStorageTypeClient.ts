//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryStorageTypeModelSearchQuery } from "./Models/IQueryStorageTypeModelSearchQuery";
import type { IQueryStorageTypeModelPagedQueryResult } from "./Models/IQueryStorageTypeModelPagedQueryResult";
import type { IQueryStorageTypeModel } from "./Models/IQueryStorageTypeModel";
import type { ISaveStorageTypeModel } from "./Models/ISaveStorageTypeModel";

export type { IQueryStorageTypeModelSearchQuery };
export type { IQueryStorageTypeModelPagedQueryResult };
export type { IQueryStorageTypeModel };
export type { ISaveStorageTypeModel };

type integer = number;

export interface IStorageTypeClient {

    /**
    *
    * Query **QueryStorageTypeModel**
    *
    * @description Query **QueryStorageTypeModel**
    * @operationId StorageType_Query
    * @tag StorageType
    * @tag model-query
    * @path /api/StorageType/Query
    */
    Query(params: {
        body?: IQueryStorageTypeModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryStorageTypeModelSearchQuery
    }): Promise<IQueryStorageTypeModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryStorageTypeModelPagedQueryResult
    
    
    /**
    *
    * Get **QueryStorageTypeModel**
    *
    * @description Get **QueryStorageTypeModel**
    * @operationId StorageType_Get
    * @tag StorageType
    * @tag model-getter
    * @path /api/StorageType/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQueryStorageTypeModel>;
    /**
    *
    * Save **QueryStorageTypeModel**
    *
    * @description Save **QueryStorageTypeModel**
    * @operationId StorageType_Save
    * @tag StorageType
    * @tag model-setter
    * @path /api/StorageType/Save
    */
    Save(params: {
        body?: ISaveStorageTypeModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveStorageTypeModel
    }): Promise<IQueryStorageTypeModel>; // #/components/schemas/GreenOnion.Common.Models.QueryStorageTypeModel
    

}
