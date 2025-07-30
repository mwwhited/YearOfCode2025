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

const ZQuerySchoolDistrictModel = z.object({
    schoolDistrictId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    siteCode: z.string().nullish().meta({}),  
    districtName: z.string().nullish().meta({}),  
    phoneNumber: z.string().nullish().meta({}),  
    email: z.string().nullish().meta({}),  
    country: z.string().nullish().meta({}),  
    stateId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryStateModel',}),  
    state: z.string().nullish().meta({}),  
    city: z.string().nullish().meta({}),  
    districtLogo: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    foodServiceOptions: z.string().nullish().meta({}),  
    contractCompany: z.string().nullish().meta({}),  
    isSchoolCoopMember: z.boolean().nullish().meta({}),  
    isSchoolCoop: z.boolean().nullish().meta({}),  
    schoolCoopId: z.number().int().nullish().meta({}),  
    schoolCoopName: z.string().nullish().meta({}),  
    createdOn: z.string().nullish().meta({}),  
    createdById: z.number().int().nullish().meta({}),  
    createdBy: z.string().nullish().meta({}),  
    updatedOn: z.string().nullish().meta({}),  
    updatedById: z.number().int().nullish().meta({}),  
    updatedBy: z.string().nullish().meta({}),  
});

export default ZQuerySchoolDistrictModel;