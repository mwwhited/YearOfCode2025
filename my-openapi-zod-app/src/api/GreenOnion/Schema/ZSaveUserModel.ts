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

const ZSaveUserModel = z.object({
    userId: z.number().int().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    firstName: z.string().nullish().meta({}),  
    lastName: z.string().nullish().meta({}),  
    email: z.string().nullish().meta({}),  
    mobile: z.string().nullish().meta({}),  
    profileImage: z.string().nullish().meta({}),  
    coverImage: z.string().nullish().meta({}),  
    addressLine1: z.string().nullish().meta({}),  
    addressLine2: z.string().nullish().meta({}),  
    city: z.string().nullish().meta({}),  
    country: z.string().nullish().meta({}),  
    zipCode: z.string().nullish().meta({}),  
    stateId: z.number().int().nullish().meta({}),  
    roleId: z.number().int().nullish().meta({}),  
    schoolDistrictId: z.number().int().nullish().meta({}),  
    manufacturerId: z.number().int().nullish().meta({}),  
});

export default ZSaveUserModel;