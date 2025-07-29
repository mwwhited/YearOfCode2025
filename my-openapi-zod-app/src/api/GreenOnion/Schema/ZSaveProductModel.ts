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

const ZSaveProductModel = z.object({
    productId: z.number().int().nullish(),
    productName: z.string().nullish(),
    gtin: z.string().nullish(),
    upc: z.string().nullish(),
    categoryId: z.number().int().nullish(),
    subCategoryId: z.number().int().nullish(),
    iocCategoryId: z.number().int().nullish(),
    ingredients: z.string().nullish(),
    brandName: z.string().nullish(),
    description: z.string().nullish(),
    allergenKeywords: z.string().nullish(),
    vendor: z.string().nullish(),
    manufacturerId: z.number().int().nullish(),
    storageTypeId: z.number().int().nullish(),
    productLabelPdfUrl: z.string().nullish(),
    manufacturerProductCode: z.string().nullish(),
    isActive: z.boolean().nullish(),
    nutritionalInformation: ZNutritionalInformationModel.nullish(),
});

export default ZSaveProductModel;