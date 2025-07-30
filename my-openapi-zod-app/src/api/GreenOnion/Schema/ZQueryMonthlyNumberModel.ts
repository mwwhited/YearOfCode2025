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

const ZQueryMonthlyNumberModel = z.object({
    id: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    schoolDistrictId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QuerySchoolDistrictModel',}),  
    monthId: z.number().int().nullish().meta({}),  
    actualMonthId: z.number().int().nullish().meta({}),  
    year: z.string().nullish().meta({}),  
    enrollment: z.number().int().nullish().meta({}),  
    numberOfSites: z.number().int().nullish().meta({}),  
    numberOfDistricts: z.number().int().nullish().meta({}),  
    mealsServed: z.number().int().nullish().meta({}),  
    freeAndReducedPercent: z.number().int().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    regDate: z.string().nullish().meta({}),  
    createdOn: z.string().nullish().meta({}),  
    createdById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    createdBy: z.string().nullish().meta({}),  
    updatedOn: z.string().nullish().meta({}),  
    updatedById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    updatedBy: z.string().nullish().meta({}),  
});

export default ZQueryMonthlyNumberModel;