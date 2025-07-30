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
    definedFilterId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    createById: z.number().int().meta({}).nullish(),  
    updatedOn: z.string().meta({}).nullish(),  
    updatedById: z.number().int().meta({}).nullish(),  
    updatedBy: z.string().meta({}).nullish(),  
    createBy: z.string().meta({}).nullish(),  
    path: z.string().meta({}).nullish(),  
    name: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    createdOn: z.string().meta({}).nullish(),  
    state: z.string().meta({}).nullish(),  
});

export default ZQueryDefinedFilterModel;