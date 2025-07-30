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
    id: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    schoolDistrictId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QuerySchoolDistrictModel',}).nullish(),  
    monthId: z.number().int().meta({}).nullish(),  
    actualMonthId: z.number().int().meta({}).nullish(),  
    year: z.string().meta({}).nullish(),  
    enrollment: z.number().int().meta({}).nullish(),  
    numberOfSites: z.number().int().meta({}).nullish(),  
    numberOfDistricts: z.number().int().meta({}).nullish(),  
    mealsServed: z.number().int().meta({}).nullish(),  
    freeAndReducedPercent: z.number().int().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    regDate: z.string().meta({}).nullish(),  
    createdOn: z.string().meta({}).nullish(),  
    createdById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    createdBy: z.string().meta({}).nullish(),  
    updatedOn: z.string().meta({}).nullish(),  
    updatedById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    updatedBy: z.string().meta({}).nullish(),  
});

export default ZQueryMonthlyNumberModel;