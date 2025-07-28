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

const ZQueryProductModelOrderBy = z.object({
    productId: ZOrderDirections.optional(),
    name: ZOrderDirections.optional(),
    description: ZOrderDirections.optional(),
    gtin: ZOrderDirections.optional(),
    upc: ZOrderDirections.optional(),
    isActive: ZOrderDirections.optional(),
    manufacturerId: ZOrderDirections.optional(),
    manufacturerName: ZOrderDirections.optional(),
    iocCategoryId: ZOrderDirections.optional(),
    iocCategory: ZOrderDirections.optional(),
    categoryId: ZOrderDirections.optional(),
    category: ZOrderDirections.optional(),
    subCategoryId: ZOrderDirections.optional(),
    subCategory: ZOrderDirections.optional(),
    storageTypeId: ZOrderDirections.optional(),
    storageTypeName: ZOrderDirections.optional(),
    ingredients: ZOrderDirections.optional(),
    isAllocated: ZOrderDirections.optional(),
    hasAllergens: ZOrderDirections.optional(),
    hasOneWorldSyncProduct: ZOrderDirections.optional(),
    oneWorldSyncProductId: ZOrderDirections.optional(),
    hasProduct: ZOrderDirections.optional(),
    hasSuggestedProducts: ZOrderDirections.optional(),
    hasApprovedSuggestedProducts: ZOrderDirections.optional(),
    isSuggestedProduct: ZOrderDirections.optional(),
    isApprovedSuggestedProduct: ZOrderDirections.optional(),
    createdOn: ZOrderDirections.optional(),
    createdById: ZOrderDirections.optional(),
    createdBy: ZOrderDirections.optional(),
    updatedOn: ZOrderDirections.optional(),
    updatedById: ZOrderDirections.optional(),
    updatedBy: ZOrderDirections.optional(),
});

export default ZQueryProductModelOrderBy;