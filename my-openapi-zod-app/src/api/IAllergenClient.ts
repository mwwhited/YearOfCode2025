//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryAllergenModelSearchQuery } from "./Models/IQueryAllergenModelSearchQuery";
import type { IQueryAllergenModelPagedQueryResult } from "./Models/IQueryAllergenModelPagedQueryResult";
import type { IQueryAllergenModel } from "./Models/IQueryAllergenModel";
import type { ISaveAllergenModel } from "./Models/ISaveAllergenModel";

export type { IQueryAllergenModelSearchQuery };
export type { IQueryAllergenModelPagedQueryResult };
export type { IQueryAllergenModel };
export type { ISaveAllergenModel };

type integer = number;

export interface IAllergenClient {

    /**
    *
    * Query **QueryAllergenModel**
    *
    * @description Query **QueryAllergenModel**
    * @operationId Allergen_Query
    * @tag Allergen
    * @tag model-query
    * @path /api/Allergen/Query
    */
    Query(params: {
        body?: IQueryAllergenModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModelSearchQuery
    }): Promise<IQueryAllergenModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModelPagedQueryResult
    
    
    /**
    *
    * Get **QueryAllergenModel**
    *
    * @description Get **QueryAllergenModel**
    * @operationId Allergen_Get
    * @tag Allergen
    * @tag model-getter
    * @path /api/Allergen/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQueryAllergenModel>;
    /**
    *
    * Save **QueryAllergenModel**
    *
    * @description Save **QueryAllergenModel**
    * @operationId Allergen_Save
    * @tag Allergen
    * @tag model-setter
    * @path /api/Allergen/Save
    */
    Save(params: {
        body?: ISaveAllergenModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveAllergenModel
    }): Promise<IQueryAllergenModel>; // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModel
    

}
