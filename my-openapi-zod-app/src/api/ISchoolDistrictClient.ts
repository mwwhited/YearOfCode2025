//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQuerySchoolDistrictModelSearchQuery } from "./Models/IQuerySchoolDistrictModelSearchQuery";
import type { IQuerySchoolDistrictModelPagedQueryResult } from "./Models/IQuerySchoolDistrictModelPagedQueryResult";
import type { IQuerySchoolDistrictModel } from "./Models/IQuerySchoolDistrictModel";
import type { ISaveSchoolDistrictModel } from "./Models/ISaveSchoolDistrictModel";

export type { IQuerySchoolDistrictModelSearchQuery };
export type { IQuerySchoolDistrictModelPagedQueryResult };
export type { IQuerySchoolDistrictModel };
export type { ISaveSchoolDistrictModel };

type integer = number;

export interface ISchoolDistrictClient {

    /**
    *
    * Query **QuerySchoolDistrictModel**
    *
    * @description Query **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Query
    * @tag SchoolDistrict
    * @tag model-query
    * @path /api/SchoolDistrict/Query
    */
    Query(params: {
        body?: IQuerySchoolDistrictModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QuerySchoolDistrictModelSearchQuery
    }): Promise<IQuerySchoolDistrictModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QuerySchoolDistrictModelPagedQueryResult
    
    
    /**
    *
    * Get **QuerySchoolDistrictModel**
    *
    * @description Get **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Get
    * @tag SchoolDistrict
    * @tag model-getter
    * @path /api/SchoolDistrict/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            name?: string | undefined; // 
    }): Promise<IQuerySchoolDistrictModel>;
    /**
    *
    * Save **QuerySchoolDistrictModel**
    *
    * @description Save **QuerySchoolDistrictModel**
    * @operationId SchoolDistrict_Save
    * @tag SchoolDistrict
    * @tag model-setter
    * @path /api/SchoolDistrict/Save
    */
    Save(params: {
        body?: ISaveSchoolDistrictModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveSchoolDistrictModel
    }): Promise<IQuerySchoolDistrictModel>; // #/components/schemas/GreenOnion.Common.Models.QuerySchoolDistrictModel
    

}
