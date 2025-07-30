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

const ZQueryManufacturerModel = z.object({
    manufacturerId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    manufacturerName: z.string().nullish().meta({}),  
    glnNumber: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    hasUsers: z.boolean().nullish().meta({}),  
    userCount: z.number().int().nullish().meta({}),  
    hasActiveUsers: z.boolean().nullish().meta({}),  
    activeUserCount: z.number().int().nullish().meta({}),  
    productCount: z.number().int().nullish().meta({}),  
    hasOneWorldSync: z.boolean().nullish().meta({}),  
    oneWorldSyncCount: z.number().int().nullish().meta({}),  
    createdOn: z.string().nullish().meta({}),  
    createdById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    createdBy: z.string().nullish().meta({}),  
    updatedOn: z.string().nullish().meta({}),  
    updatedById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    updatedBy: z.string().nullish().meta({}),  
});

export default ZQueryManufacturerModel;