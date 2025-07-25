//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModelOrderBy } from "./ZQueryMonthlyNumberModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryMonthlyNumberModelOrderBy {
    $schema: typeof ZQueryMonthlyNumberModelOrderBy;

    id?: any | undefined; 
    schoolDistrictId?: any | undefined; 
    monthId?: any | undefined; 
    actualMonthId?: any | undefined; 
    year?: any | undefined; 
    enrollment?: any | undefined; 
    numberOfSites?: any | undefined; 
    numberOfDistricts?: any | undefined; 
    mealsServed?: any | undefined; 
    freeAndReducedPercent?: any | undefined; 
    isActive?: any | undefined; 
    regDate?: any | undefined; 
    createdOn?: any | undefined; 
    createdById?: any | undefined; 
    createdBy?: any | undefined; 
    updatedOn?: any | undefined; 
    updatedById?: any | undefined; 
    updatedBy?: any | undefined; 

    toJSON(data?: any) : any;
}
