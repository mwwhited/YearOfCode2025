//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModel } from "./ZQueryMonthlyNumberModel";

type integer = number;

export interface IQueryMonthlyNumberModel {
    $schema: typeof ZQueryMonthlyNumberModel;

    id?: integer | undefined; 
    schoolDistrictId?: integer | undefined; 
    monthId?: integer | undefined; 
    actualMonthId?: integer | undefined; 
    year?: string | undefined; 
    enrollment?: integer | undefined; 
    numberOfSites?: integer | undefined; 
    numberOfDistricts?: integer | undefined; 
    mealsServed?: integer | undefined; 
    freeAndReducedPercent?: integer | undefined; 
    isActive?: boolean | undefined; 
    regDate?: string | undefined; 
    createdOn?: string | undefined; 
    createdById?: integer | undefined; 
    createdBy?: string | undefined; 
    updatedOn?: string | undefined; 
    updatedById?: integer | undefined; 
    updatedBy?: string | undefined; 

    toJSON(data?: any) : any;
}
