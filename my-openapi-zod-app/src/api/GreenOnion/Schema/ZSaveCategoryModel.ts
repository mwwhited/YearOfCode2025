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

const ZSaveCategoryModel = z.object({
    categoryId: z.number().int().meta({}).nullish(),  
    categoryName: z.string().meta({}).nullish(),  
    categoryCode: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
});

export default ZSaveCategoryModel;