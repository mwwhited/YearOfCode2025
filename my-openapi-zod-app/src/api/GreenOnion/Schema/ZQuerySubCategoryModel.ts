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

const ZQuerySubCategoryModel = z.object({
    subCategoryId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    categoryId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryCategoryModel',}),  
    subCategoryName: z.string().nullish().meta({}),  
    subCategoryCode: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    createdOn: z.string().nullish().meta({}),  
    createdById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    createdBy: z.string().nullish().meta({}),  
    updatedOn: z.string().nullish().meta({}),  
    updatedById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    updatedBy: z.string().nullish().meta({}),  
});

export default ZQuerySubCategoryModel;