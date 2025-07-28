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
    IQuerySchoolDistrictModelSearchQuery,
    IQuerySchoolDistrictModelPagedQueryResult,
    IQuerySchoolDistrictModel,
    ISaveSchoolDistrictModel,
 } from "./Models";
 
export type {
    IQuerySchoolDistrictModelSearchQuery,
    IQuerySchoolDistrictModelPagedQueryResult,
    IQuerySchoolDistrictModel,
    ISaveSchoolDistrictModel,
 };

export default interface ISchoolDistrictClient {
    
    /**
    * Query **QuerySchoolDistrictModel**
    * @description Query **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Query
    * @tag SchoolDistrict
    * @tag model-query
    * @path /api/SchoolDistrict/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */
    Query(params: {
        body?: IQuerySchoolDistrictModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QuerySchoolDistrictModelSearchQuery        
    }): Promise<IQuerySchoolDistrictModelPagedQueryResult | undefined>;
    
    /**
    * Get **QuerySchoolDistrictModel**
    * @description Get **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Get
    * @tag SchoolDistrict
    * @tag model-getter
    * @path /api/SchoolDistrict/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */ 
    Get(params: {
            id?: number | undefined;
            name?: string | undefined;
    }): Promise<IQuerySchoolDistrictModel | undefined>;
    
    /**
    * Save **QuerySchoolDistrictModel**
    * @description Save **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Save
    * @tag SchoolDistrict
    * @tag model-setter
    * @path /api/SchoolDistrict/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QuerySchoolDistrictModel
    */
    Save(params: {
        body?: ISaveSchoolDistrictModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveSchoolDistrictModel        
    }): Promise<IQuerySchoolDistrictModel | undefined>;
}