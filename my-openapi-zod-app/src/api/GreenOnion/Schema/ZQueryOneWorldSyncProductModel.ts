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

const ZQueryOneWorldSyncProductModel = z.object({
    productId: z.number().int().nullish(),
    name: z.string().nullish(),
    description: z.string().nullish(),
    gtin: z.string().nullish(),
    upc: z.string().nullish(),
    images: z.array(z.string()).nullish(),
    isActive: z.boolean().nullish(),
    manufacturerId: z.number().int().nullish(),
    manufacturerName: z.string().nullish(),
    iocCategoryId: z.number().int().nullish(),
    iocCategory: z.string().nullish(),
    categoryId: z.number().int().nullish(),
    category: z.string().nullish(),
    subCategoryId: z.number().int().nullish(),
    subCategory: z.string().nullish(),
    storageTypeId: z.number().int().nullish(),
    storageTypeName: z.string().nullish(),
    ingredients: z.string().nullish(),
    isAllocated: z.boolean().nullish(),
    hasAllergens: z.boolean().nullish(),
    hasOneWorldSyncProduct: z.boolean().nullish(),
    oneWorldSyncProductId: z.number().int().nullish(),
    hasProduct: z.boolean().nullish(),
    hasSuggestedProducts: z.boolean().nullish(),
    hasApprovedSuggestedProducts: z.boolean().nullish(),
    isSuggestedProduct: z.boolean().nullish(),
    isApprovedSuggestedProduct: z.boolean().nullish(),
    nutritionalInformation: ZNutritionalInformationModel.nullish(),
    createdOn: z.string().nullish(),
    createdById: z.number().int().nullish(),
    createdBy: z.string().nullish(),
    updatedOn: z.string().nullish(),
    updatedById: z.number().int().nullish(),
    updatedBy: z.string().nullish(),
});

export default ZQueryOneWorldSyncProductModel;