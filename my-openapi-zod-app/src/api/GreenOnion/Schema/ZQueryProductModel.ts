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
    productId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    name: z.string().meta({}).nullish(),
    productName: z.string().meta({}).nullish(),
    unitPrice: z.number().meta({}).nullish(),
    unitsInStock: z.number().int().meta({}).nullish(),  
    description: z.string().meta({}).nullish(),  
    gtin: z.string().meta({}).nullish(),  
    upc: z.string().meta({}).nullish(),  
    images: z.array(z.string()).meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    manufacturerId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryManufacturerModel',}).nullish(),  
    manufacturerName: z.string().meta({}).nullish(),  
    iocCategoryId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryIocCategoryModel',}).nullish(),  
    iocCategory: z.string().meta({}).nullish(),  
    categoryId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryCategoryModel',}).nullish(),  
    category: z.string().meta({}).nullish(),  
    subCategoryId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QuerySubCategoryModel',}).nullish(),  
    subCategory: z.string().meta({}).nullish(),  
    storageTypeId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryStorageTypeModel',}).nullish(),  
    storageTypeName: z.string().meta({}).nullish(),  
    ingredients: z.string().meta({}).nullish(),  
    isAllocated: z.boolean().meta({}).nullish(),  
    hasAllergens: z.boolean().meta({}).nullish(),  
    hasOneWorldSyncProduct: z.boolean().meta({}).nullish(),  
    oneWorldSyncProductId: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryOneWorldSyncProductModel',}).nullish(),  
    hasProduct: z.boolean().meta({}).nullish(),  
    hasSuggestedProducts: z.boolean().meta({}).nullish(),  
    hasApprovedSuggestedProducts: z.boolean().meta({}).nullish(),  
    isSuggestedProduct: z.boolean().meta({}).nullish(),  
    isApprovedSuggestedProduct: z.boolean().meta({}).nullish(),  
    nutritionalInformation: ZNutritionalInformationModel.nullish(),  
    createdOn: z.string().meta({}).nullish(),  
    createdById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    createdBy: z.string().meta({}).nullish(),  
    updatedOn: z.string().meta({}).nullish(),  
    updatedById: z.number().int().meta({'x-navigation-target':'GreenOnion.Common.Models.QueryUserModel',}).nullish(),  
    updatedBy: z.string().meta({}).nullish(),  
});

export default ZQueryProductModel;