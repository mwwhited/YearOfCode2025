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

const ZQueryProductModelFilter = z.object({
    productId: ZFilterParameter.optional(),
    name: ZFilterParameter.optional(),
    description: ZFilterParameter.optional(),
    gtin: ZFilterParameter.optional(),
    upc: ZFilterParameter.optional(),
    isActive: ZFilterParameter.optional(),
    manufacturerId: ZFilterParameter.optional(),
    manufacturerName: ZFilterParameter.optional(),
    iocCategoryId: ZFilterParameter.optional(),
    iocCategory: ZFilterParameter.optional(),
    categoryId: ZFilterParameter.optional(),
    category: ZFilterParameter.optional(),
    subCategoryId: ZFilterParameter.optional(),
    subCategory: ZFilterParameter.optional(),
    storageTypeId: ZFilterParameter.optional(),
    storageTypeName: ZFilterParameter.optional(),
    ingredients: ZFilterParameter.optional(),
    isAllocated: ZFilterParameter.optional(),
    hasAllergens: ZFilterParameter.optional(),
    hasOneWorldSyncProduct: ZFilterParameter.optional(),
    oneWorldSyncProductId: ZFilterParameter.optional(),
    hasProduct: ZFilterParameter.optional(),
    hasSuggestedProducts: ZFilterParameter.optional(),
    hasApprovedSuggestedProducts: ZFilterParameter.optional(),
    isSuggestedProduct: ZFilterParameter.optional(),
    isApprovedSuggestedProduct: ZFilterParameter.optional(),
    createdOn: ZFilterParameter.optional(),
    createdById: ZFilterParameter.optional(),
    createdBy: ZFilterParameter.optional(),
    updatedOn: ZFilterParameter.optional(),
    updatedById: ZFilterParameter.optional(),
    updatedBy: ZFilterParameter.optional(),
});

export default ZQueryProductModelFilter;