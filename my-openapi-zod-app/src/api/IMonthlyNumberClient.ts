//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

// Models 
import type { IQueryMonthlyNumberModelSearchQuery } from "./Models/IQueryMonthlyNumberModelSearchQuery";
import type { IQueryMonthlyNumberModelPagedQueryResult } from "./Models/IQueryMonthlyNumberModelPagedQueryResult";
import type { IQueryMonthlyNumberModel } from "./Models/IQueryMonthlyNumberModel";
import type { ISaveMonthlyNumberModel } from "./Models/ISaveMonthlyNumberModel";

export type { IQueryMonthlyNumberModelSearchQuery };
export type { IQueryMonthlyNumberModelPagedQueryResult };
export type { IQueryMonthlyNumberModel };
export type { ISaveMonthlyNumberModel };

type integer = number;

export interface IMonthlyNumberClient {

    /**
    *
    * Query **QueryMonthlyNumberModel**
    *
    * @description Query **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Query
    * @tag MonthlyNumber
    * @tag model-query
    * @path /api/MonthlyNumber/Query
    */
    Query(params: {
        body?: IQueryMonthlyNumberModelSearchQuery | undefined; // #/components/schemas/GreenOnion.Common.Models.QueryMonthlyNumberModelSearchQuery
    }): Promise<IQueryMonthlyNumberModelPagedQueryResult>; // #/components/schemas/GreenOnion.Common.Models.QueryMonthlyNumberModelPagedQueryResult
    
    
    /**
    *
    * Get **QueryMonthlyNumberModel**
    *
    * @description Get **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Get
    * @tag MonthlyNumber
    * @tag model-getter
    * @path /api/MonthlyNumber/Get
    */
    Get(params: {
            id?: integer | undefined; // 
            schoolDistrictId?: integer | undefined; // 
            year?: string | undefined; // 
    }): Promise<IQueryMonthlyNumberModel>;
    /**
    *
    * Save **QueryMonthlyNumberModel**
    *
    * @description Save **QueryMonthlyNumberModel**
    * @operationId MonthlyNumber_Save
    * @tag MonthlyNumber
    * @tag model-setter
    * @path /api/MonthlyNumber/Save
    */
    Save(params: {
        body?: ISaveMonthlyNumberModel | undefined; // #/components/schemas/GreenOnion.Common.Models.SaveMonthlyNumberModel
    }): Promise<IQueryMonthlyNumberModel>; // #/components/schemas/GreenOnion.Common.Models.QueryMonthlyNumberModel
    

}
