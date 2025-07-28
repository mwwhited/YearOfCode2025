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
    IQueryAllergenModelSearchQuery,
    IQueryAllergenModelPagedQueryResult,
    IQueryAllergenModel,
    ISaveAllergenModel,
 } from "./Models";
 
export type {
    IQueryAllergenModelSearchQuery,
    IQueryAllergenModelPagedQueryResult,
    IQueryAllergenModel,
    ISaveAllergenModel,
 };

export default interface IAllergenClient {
    /**
    * Query **QueryAllergenModel**
    * @description Query **QueryAllergenModel**
    * @operationId Allergen_Query
    * @tag Allergen
    * @tag model-query
    * @path /api/Allergen/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */
    Query(params: {
        body?: IQueryAllergenModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryAllergenModelSearchQuery        
    }): Promise<IQueryAllergenModelPagedQueryResult | undefined>;
    /**
    * Get **QueryAllergenModel**
    * @description Get **QueryAllergenModel**
    * @operationId Allergen_Get
    * @tag Allergen
    * @tag model-getter
    * @path /api/Allergen/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */ 
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQueryAllergenModel | undefined>;
    /**
    * Save **QueryAllergenModel**
    * @description Save **QueryAllergenModel**
    * @operationId Allergen_Save
    * @tag Allergen
    * @tag model-setter
    * @path /api/Allergen/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryAllergenModel
    */
    Save(params: {
        body?: ISaveAllergenModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveAllergenModel        
    }): Promise<IQueryAllergenModel | undefined>;
}