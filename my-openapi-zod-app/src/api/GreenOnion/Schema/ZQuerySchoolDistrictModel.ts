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
    schoolDistrictId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    siteCode: z.string().meta({}).nullish(),  
    districtName: z.string().meta({}).nullish(),  
    phoneNumber: z.string().meta({}).nullish(),  
    email: z.string().meta({}).nullish(),  
    country: z.string().meta({}).nullish(),  
    stateId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryStateModel',}).nullish(),  
    state: z.string().meta({}).nullish(),  
    city: z.string().meta({}).nullish(),  
    districtLogo: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    foodServiceOptions: z.string().meta({}).nullish(),  
    contractCompany: z.string().meta({}).nullish(),  
    isSchoolCoopMember: z.boolean().meta({}).nullish(),  
    isSchoolCoop: z.boolean().meta({}).nullish(),  
    schoolCoopId: z.number().int().meta({}).nullish(),  
    schoolCoopName: z.string().meta({}).nullish(),  
    createdOn: z.string().meta({}).nullish(),  
    createdById: z.number().int().meta({}).nullish(),  
    createdBy: z.string().meta({}).nullish(),  
    updatedOn: z.string().meta({}).nullish(),  
    updatedById: z.number().int().meta({}).nullish(),  
    updatedBy: z.string().meta({}).nullish(),  
});

export default ZQuerySchoolDistrictModel;