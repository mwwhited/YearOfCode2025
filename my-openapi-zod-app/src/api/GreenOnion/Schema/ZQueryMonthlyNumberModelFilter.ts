//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";
import ZFilterParameter from "./ZFilterParameter";

const ZQueryMonthlyNumberModelFilter = z.object({
    id: ZFilterParameter.nullish(),  
    schoolDistrictId: ZFilterParameter.nullish(),  
    monthId: ZFilterParameter.nullish(),  
    actualMonthId: ZFilterParameter.nullish(),  
    year: ZFilterParameter.nullish(),  
    enrollment: ZFilterParameter.nullish(),  
    numberOfSites: ZFilterParameter.nullish(),  
    numberOfDistricts: ZFilterParameter.nullish(),  
    mealsServed: ZFilterParameter.nullish(),  
    freeAndReducedPercent: ZFilterParameter.nullish(),  
    isActive: ZFilterParameter.nullish(),  
    regDate: ZFilterParameter.nullish(),  
    createdOn: ZFilterParameter.nullish(),  
    createdById: ZFilterParameter.nullish(),  
    createdBy: ZFilterParameter.nullish(),  
    updatedOn: ZFilterParameter.nullish(),  
    updatedById: ZFilterParameter.nullish(),  
    updatedBy: ZFilterParameter.nullish(),  
});

export default ZQueryMonthlyNumberModelFilter;