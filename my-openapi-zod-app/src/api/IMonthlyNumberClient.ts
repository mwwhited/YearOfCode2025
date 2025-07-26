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
import type { IQueryMonthlyNumberModelSearchQuery } from "./Models/IQueryMonthlyNumberModelSearchQuery";
import type { IQueryMonthlyNumberModelPagedQueryResult } from "./Models/IQueryMonthlyNumberModelPagedQueryResult";
import type { IQueryMonthlyNumberModel } from "./Models/IQueryMonthlyNumberModel";
import type { ISaveMonthlyNumberModel } from "./Models/ISaveMonthlyNumberModel";

export type { IQueryMonthlyNumberModelSearchQuery };
export type { IQueryMonthlyNumberModelPagedQueryResult };
export type { IQueryMonthlyNumberModel };
export type { ISaveMonthlyNumberModel };

export interface IMonthlyNumberClient {

    /**
    * Query **QueryMonthlyNumberModel**
    * @description Query **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Query
    * @tag MonthlyNumber
    * @tag model-query
    * @path /api/MonthlyNumber/Query 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    Query(params: {
        body?: IQueryMonthlyNumberModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryMonthlyNumberModelSearchQuery        
    }): Promise<IQueryMonthlyNumberModelPagedQueryResult | undefined>;
    /**
    * Get **QueryMonthlyNumberModel**
    * @description Get **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Get
    * @tag MonthlyNumber
    * @tag model-getter
    * @path /api/MonthlyNumber/Get 
    * @anonymous false
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    Get(params: {
            id?: number | undefined;
            schoolDistrictId?: number | undefined;
            year?: string | undefined;
    }): Promise<IQueryMonthlyNumberModel | undefined>;
    /**
    * Save **QueryMonthlyNumberModel**
    * @description Save **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Save
    * @tag MonthlyNumber
    * @tag model-setter
    * @path /api/MonthlyNumber/Save 
    * @anonymous false
    * @role Super Admin
    * @querySet GreenOnion.Common.Models.QueryMonthlyNumberModel
    */
    Save(params: {
        body?: ISaveMonthlyNumberModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveMonthlyNumberModel        
    }): Promise<IQueryMonthlyNumberModel | undefined>;
}