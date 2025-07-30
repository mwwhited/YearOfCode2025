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
import ZNutritionalInformationModel from "./ZNutritionalInformationModel";

const ZQueryProductModel = z.object({
    productId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    name: z.string().nullish().meta({}),  
    description: z.string().nullish().meta({}),  
    gtin: z.string().nullish().meta({}),  
    upc: z.string().nullish().meta({}),  
    images: z.array(z.string()).nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    manufacturerId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryManufacturerModel',}),  
    manufacturerName: z.string().nullish().meta({}),  
    iocCategoryId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryIocCategoryModel',}),  
    iocCategory: z.string().nullish().meta({}),  
    categoryId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryCategoryModel',}),  
    category: z.string().nullish().meta({}),  
    subCategoryId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QuerySubCategoryModel',}),  
    subCategory: z.string().nullish().meta({}),  
    storageTypeId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryStorageTypeModel',}),  
    storageTypeName: z.string().nullish().meta({}),  
    ingredients: z.string().nullish().meta({}),  
    isAllocated: z.boolean().nullish().meta({}),  
    hasAllergens: z.boolean().nullish().meta({}),  
    hasOneWorldSyncProduct: z.boolean().nullish().meta({}),  
    oneWorldSyncProductId: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryOneWorldSyncProductModel',}),  
    hasProduct: z.boolean().nullish().meta({}),  
    hasSuggestedProducts: z.boolean().nullish().meta({}),  
    hasApprovedSuggestedProducts: z.boolean().nullish().meta({}),  
    isSuggestedProduct: z.boolean().nullish().meta({}),  
    isApprovedSuggestedProduct: z.boolean().nullish().meta({}),  
    nutritionalInformation: ZNutritionalInformationModel.nullish(),  
    createdOn: z.string().nullish().meta({}),  
    createdById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    createdBy: z.string().nullish().meta({}),  
    updatedOn: z.string().nullish().meta({}),  
    updatedById: z.number().int().nullish().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}),  
    updatedBy: z.string().nullish().meta({}),  
});

export default ZQueryProductModel;