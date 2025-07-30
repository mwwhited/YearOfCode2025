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

const ZQueryUserModel = z.object({
    userId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    isActive: z.boolean().nullish().meta({}),  
    firstName: z.string().nullish().meta({}),  
    lastName: z.string().nullish().meta({}),  
    objectId: z.string().nullish().meta({}),  
    email: z.string().nullish().meta({}),  
    mobile: z.string().nullish().meta({}),  
    profileImage: z.string().nullish().meta({}),  
    coverImage: z.string().nullish().meta({}),  
    addressLine1: z.string().nullish().meta({}),  
    addressLine2: z.string().nullish().meta({}),  
    city: z.string().nullish().meta({}),  
    country: z.string().nullish().meta({}),  
    zipCode: z.string().nullish().meta({}),  
    stateId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryStateModel',}),  
    state: z.string().nullish().meta({}),  
    roleId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryRoleModel',}),  
    roleName: z.string().nullish().meta({}),  
    schoolDistrictId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QuerySchoolDistrictModel',}),  
    schoolDistrictName: z.string().nullish().meta({}),  
    manufacturerId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryManufacturerModel',}),  
    manufacturerName: z.string().nullish().meta({}),  
    createdOn: z.string().nullish().meta({}),  
    createdById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    createdBy: z.string().nullish().meta({}),  
    updatedOn: z.string().nullish().meta({}),  
    updatedById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    updatedBy: z.string().nullish().meta({}),  
});

export default ZQueryUserModel;