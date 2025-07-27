//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZQueryMonthlyNumberModel = z.object({
    id:z.number().int().optional(),
    schoolDistrictId:z.number().int().optional(),
    monthId:z.number().int().optional(),
    actualMonthId:z.number().int().optional(),
    year:z.string().optional(),
    enrollment:z.number().int().optional(),
    numberOfSites:z.number().int().optional(),
    numberOfDistricts:z.number().int().optional(),
    mealsServed:z.number().int().optional(),
    freeAndReducedPercent:z.number().int().optional(),
    isActive:z.boolean().optional(),
    regDate:z.string().optional(),
    createdOn:z.string().optional(),
    createdById:z.number().int().optional(),
    createdBy:z.string().optional(),
    updatedOn:z.string().optional(),
    updatedById:z.number().int().optional(),
    updatedBy:z.string().optional(),
});

export default ZQueryMonthlyNumberModel;