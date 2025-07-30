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

const ZSaveSchoolDistrictModel = z.object({
    schoolDistrictId: z.number().int().meta({}).nullish(),  
    siteCode: z.string().meta({}).nullish(),  
    districtName: z.string().meta({}).nullish(),  
    phoneNumber: z.string().meta({}).nullish(),  
    email: z.string().meta({}).nullish(),  
    country: z.string().meta({}).nullish(),  
    state: z.number().int().meta({}).nullish(),  
    city: z.string().meta({}).nullish(),  
    districtLogo: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    foodServiceOptions: z.string().meta({}).nullish(),  
    contractCompany: z.string().meta({}).nullish(),  
    isSchoolCoop: z.boolean().meta({}).nullish(),  
    schoolCoopId: z.number().int().meta({}).nullish(),  
});

export default ZSaveSchoolDistrictModel;