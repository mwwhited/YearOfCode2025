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
    definedFilterId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    path: z.string().nullish().meta({}),  
    name: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    state: z.string().nullish().meta({}),  
});

export default ZSaveDefinedFilterModel;