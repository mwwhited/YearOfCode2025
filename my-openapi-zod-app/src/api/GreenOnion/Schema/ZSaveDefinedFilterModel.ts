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

const ZSaveDefinedFilterModel = z.object({
    definedFilterId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    path: z.string().meta({}).nullish(),  
    name: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    state: z.string().meta({}).nullish(),  
});

export default ZSaveDefinedFilterModel;