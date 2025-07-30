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

const ZSaveSubCategoryModel = z.object({
    subCategoryId: z.number().int().meta({}).nullish(),  
    categoryId: z.number().int().meta({}).nullish(),  
    subCategoryName: z.string().meta({}).nullish(),  
    subCategoryCode: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
});

export default ZSaveSubCategoryModel;