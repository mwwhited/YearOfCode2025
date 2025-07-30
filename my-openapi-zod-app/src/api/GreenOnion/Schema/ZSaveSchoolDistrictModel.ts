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
    schoolDistrictId: z.number().int().nullish().meta({}),  
    siteCode: z.string().nullish().meta({}),  
    districtName: z.string().nullish().meta({}),  
    phoneNumber: z.string().nullish().meta({}),  
    email: z.string().nullish().meta({}),  
    country: z.string().nullish().meta({}),  
    state: z.number().int().nullish().meta({}),  
    city: z.string().nullish().meta({}),  
    districtLogo: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    foodServiceOptions: z.string().nullish().meta({}),  
    contractCompany: z.string().nullish().meta({}),  
    isSchoolCoop: z.boolean().nullish().meta({}),  
    schoolCoopId: z.number().int().nullish().meta({}),  
});

export default ZSaveSchoolDistrictModel;