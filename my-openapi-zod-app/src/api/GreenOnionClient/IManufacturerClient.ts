//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryManufacturerModelSearchQuery } from "./IQueryManufacturerModelSearchQuery";
import type { IQueryManufacturerModelPagedQueryResult } from "./IQueryManufacturerModelPagedQueryResult";
import type { IQueryManufacturerModel } from "./IQueryManufacturerModel";
import type { ISaveManufacturerModel } from "./ISaveManufacturerModel";

export type { IQueryManufacturerModelSearchQuery };
export type { IQueryManufacturerModelPagedQueryResult };
export type { IQueryManufacturerModel };
export type { ISaveManufacturerModel };

type integer = number;

export interface IManufacturerClient {

    /**
    *
    * Query **QueryManufacturerModel**
    *
    * @description Query **QueryManufacturerModel**
    * @operationId Manufacturer_Query
    * @tag Manufacturer
    * @tag model-query
    * @path /api/Manufacturer/Query
    */
    Query(params: {
        body?: IQueryManufacturerModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryManufacturerModelSearchQuery
    }): Promise<IQueryManufacturerModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryManufacturerModelPagedQueryResult
    
    
    /**
    *
    * Get **QueryManufacturerModel**
    *
    * @description Get **QueryManufacturerModel**
    * @operationId Manufacturer_Get
    * @tag Manufacturer
    * @tag model-getter
    * @path /api/Manufacturer/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            gln?: string | undefined; // 
    }): Promise<IQueryManufacturerModel>;
    /**
    *
    * Save **QueryManufacturerModel**
    *
    * @description Save **QueryManufacturerModel**
    * @operationId Manufacturer_Save
    * @tag Manufacturer
    * @tag model-setter
    * @path /api/Manufacturer/Save
    */
    Save(params: {
        body?: ISaveManufacturerModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveManufacturerModel
    }): Promise<IQueryManufacturerModel>; // #/components/schemas/GreenOnion.Common.Models.QueryManufacturerModel
    

}
