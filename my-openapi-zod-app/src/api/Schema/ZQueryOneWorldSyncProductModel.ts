//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";
import { ZNutritionalInformationModel } from "./ZNutritionalInformationModel";

export const ZQueryOneWorldSyncProductModel = z.object({
    productId:z.number().int().optional(),
    name:z.string().optional(),
    description:z.string().optional(),
    gtin:z.string().optional(),
    upc:z.string().optional(),
    images:z.array(string).optional(),
    isActive:z.boolean().optional(),
    manufacturerId:z.number().int().optional(),
    manufacturerName:z.string().optional(),
    iocCategoryId:z.number().int().optional(),
    iocCategory:z.string().optional(),
    categoryId:z.number().int().optional(),
    category:z.string().optional(),
    subCategoryId:z.number().int().optional(),
    subCategory:z.string().optional(),
    storageTypeId:z.number().int().optional(),
    storageTypeName:z.string().optional(),
    ingredients:z.string().optional(),
    isAllocated:z.boolean().optional(),
    hasAllergens:z.boolean().optional(),
    hasOneWorldSyncProduct:z.boolean().optional(),
    oneWorldSyncProductId:z.number().int().optional(),
    hasProduct:z.boolean().optional(),
    hasSuggestedProducts:z.boolean().optional(),
    hasApprovedSuggestedProducts:z.boolean().optional(),
    isSuggestedProduct:z.boolean().optional(),
    isApprovedSuggestedProduct:z.boolean().optional(),
    nutritionalInformation:ZNutritionalInformationModel.optional(),
    createdOn:z.string().optional(),
    createdById:z.number().int().optional(),
    createdBy:z.string().optional(),
    updatedOn:z.string().optional(),
    updatedById:z.number().int().optional(),
    updatedBy:z.string().optional(),
});
