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
    subCategoryId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    categoryId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryCategoryModel',}).nullish(),  
    subCategoryName: z.string().meta({}).nullish(),  
    subCategoryCode: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    createdOn: z.string().meta({}).nullish(),  
    createdById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    createdBy: z.string().meta({}).nullish(),  
    updatedOn: z.string().meta({}).nullish(),  
    updatedById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    updatedBy: z.string().meta({}).nullish(),  
});

export default ZQuerySubCategoryModel;