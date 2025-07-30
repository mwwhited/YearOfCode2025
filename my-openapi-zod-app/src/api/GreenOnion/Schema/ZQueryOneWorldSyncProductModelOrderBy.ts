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
import ZOrderDirections from "./ZOrderDirections";

const ZQueryOneWorldSyncProductModelOrderBy = z.object({
    productId: ZOrderDirections.nullish(),  
    name: ZOrderDirections.nullish(),  
    description: ZOrderDirections.nullish(),  
    gtin: ZOrderDirections.nullish(),  
    upc: ZOrderDirections.nullish(),  
    isActive: ZOrderDirections.nullish(),  
    manufacturerId: ZOrderDirections.nullish(),  
    manufacturerName: ZOrderDirections.nullish(),  
    iocCategoryId: ZOrderDirections.nullish(),  
    iocCategory: ZOrderDirections.nullish(),  
    categoryId: ZOrderDirections.nullish(),  
    category: ZOrderDirections.nullish(),  
    subCategoryId: ZOrderDirections.nullish(),  
    subCategory: ZOrderDirections.nullish(),  
    storageTypeId: ZOrderDirections.nullish(),  
    storageTypeName: ZOrderDirections.nullish(),  
    ingredients: ZOrderDirections.nullish(),  
    isAllocated: ZOrderDirections.nullish(),  
    hasAllergens: ZOrderDirections.nullish(),  
    hasOneWorldSyncProduct: ZOrderDirections.nullish(),  
    oneWorldSyncProductId: ZOrderDirections.nullish(),  
    hasProduct: ZOrderDirections.nullish(),  
    hasSuggestedProducts: ZOrderDirections.nullish(),  
    hasApprovedSuggestedProducts: ZOrderDirections.nullish(),  
    isSuggestedProduct: ZOrderDirections.nullish(),  
    isApprovedSuggestedProduct: ZOrderDirections.nullish(),  
    createdOn: ZOrderDirections.nullish(),  
    createdById: ZOrderDirections.nullish(),  
    createdBy: ZOrderDirections.nullish(),  
    updatedOn: ZOrderDirections.nullish(),  
    updatedById: ZOrderDirections.nullish(),  
    updatedBy: ZOrderDirections.nullish(),  
});

export default ZQueryOneWorldSyncProductModelOrderBy;