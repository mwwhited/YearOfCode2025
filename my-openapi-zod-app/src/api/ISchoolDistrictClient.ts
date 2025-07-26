//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

type integer = number;

// Models 
import type { IQuerySchoolDistrictModelSearchQuery } from "./Models/IQuerySchoolDistrictModelSearchQuery";
import type { IQuerySchoolDistrictModelPagedQueryResult } from "./Models/IQuerySchoolDistrictModelPagedQueryResult";
import type { IQuerySchoolDistrictModel } from "./Models/IQuerySchoolDistrictModel";
import type { ISaveSchoolDistrictModel } from "./Models/ISaveSchoolDistrictModel";

export type { IQuerySchoolDistrictModelSearchQuery };
export type { IQuerySchoolDistrictModelPagedQueryResult };
export type { IQuerySchoolDistrictModel };
export type { ISaveSchoolDistrictModel };

export interface ISchoolDistrictClient {

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