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
import ZFilterParameter from "./ZFilterParameter";

const ZQueryOneWorldSyncProductModelFilter = z.object({
    productId: ZFilterParameter.nullish(),  
    name: ZFilterParameter.nullish(),  
    description: ZFilterParameter.nullish(),  
    gtin: ZFilterParameter.nullish(),  
    upc: ZFilterParameter.nullish(),  
    isActive: ZFilterParameter.nullish(),  
    manufacturerId: ZFilterParameter.nullish(),  
    manufacturerName: ZFilterParameter.nullish(),  
    iocCategoryId: ZFilterParameter.nullish(),  
    iocCategory: ZFilterParameter.nullish(),  
    categoryId: ZFilterParameter.nullish(),  
    category: ZFilterParameter.nullish(),  
    subCategoryId: ZFilterParameter.nullish(),  
    subCategory: ZFilterParameter.nullish(),  
    storageTypeId: ZFilterParameter.nullish(),  
    storageTypeName: ZFilterParameter.nullish(),  
    ingredients: ZFilterParameter.nullish(),  
    isAllocated: ZFilterParameter.nullish(),  
    hasAllergens: ZFilterParameter.nullish(),  
    hasOneWorldSyncProduct: ZFilterParameter.nullish(),  
    oneWorldSyncProductId: ZFilterParameter.nullish(),  
    hasProduct: ZFilterParameter.nullish(),  
    hasSuggestedProducts: ZFilterParameter.nullish(),  
    hasApprovedSuggestedProducts: ZFilterParameter.nullish(),  
    isSuggestedProduct: ZFilterParameter.nullish(),  
    isApprovedSuggestedProduct: ZFilterParameter.nullish(),  
    createdOn: ZFilterParameter.nullish(),  
    createdById: ZFilterParameter.nullish(),  
    createdBy: ZFilterParameter.nullish(),  
    updatedOn: ZFilterParameter.nullish(),  
    updatedById: ZFilterParameter.nullish(),  
    updatedBy: ZFilterParameter.nullish(),  
});

export default ZQueryOneWorldSyncProductModelFilter;