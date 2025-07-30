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
    userId: z.number().int().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    firstName: z.string().meta({}).nullish(),  
    lastName: z.string().meta({}).nullish(),  
    email: z.string().meta({}).nullish(),  
    mobile: z.string().meta({}).nullish(),  
    profileImage: z.string().meta({}).nullish(),  
    coverImage: z.string().meta({}).nullish(),  
    addressLine1: z.string().meta({}).nullish(),  
    addressLine2: z.string().meta({}).nullish(),  
    city: z.string().meta({}).nullish(),  
    country: z.string().meta({}).nullish(),  
    zipCode: z.string().meta({}).nullish(),  
    stateId: z.number().int().meta({}).nullish(),  
    roleId: z.number().int().meta({}).nullish(),  
    schoolDistrictId: z.number().int().meta({}).nullish(),  
    manufacturerId: z.number().int().meta({}).nullish(),  
});

export default ZSaveUserModel;