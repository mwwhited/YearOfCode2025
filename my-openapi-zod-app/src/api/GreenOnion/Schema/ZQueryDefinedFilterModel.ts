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

const ZQueryDefinedFilterModel = z.object({
    definedFilterId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    createById: z.number().int().nullish().meta({}),  
    updatedOn: z.string().nullish().meta({}),  
    updatedById: z.number().int().nullish().meta({}),  
    updatedBy: z.string().nullish().meta({}),  
    createBy: z.string().nullish().meta({}),  
    path: z.string().nullish().meta({}),  
    name: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    createdOn: z.string().nullish().meta({}),  
    state: z.string().nullish().meta({}),  
});

export default ZQueryDefinedFilterModel;