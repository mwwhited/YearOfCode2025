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
    subCategoryId: z.number().int().nullish().meta({}),  
    categoryId: z.number().int().nullish().meta({}),  
    subCategoryName: z.string().nullish().meta({}),  
    subCategoryCode: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
});

export default ZSaveSubCategoryModel;