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
    productId: z.number().int().optional(),
    productName: z.string().optional(),
    gtin: z.string().optional(),
    upc: z.string().optional(),
    categoryId: z.number().int().optional(),
    subCategoryId: z.number().int().optional(),
    iocCategoryId: z.number().int().optional(),
    ingredients: z.string().optional(),
    brandName: z.string().optional(),
    description: z.string().optional(),
    allergenKeywords: z.string().optional(),
    vendor: z.string().optional(),
    manufacturerId: z.number().int().optional(),
    storageTypeId: z.number().int().optional(),
    productLabelPdfUrl: z.string().optional(),
    manufacturerProductCode: z.string().optional(),
    isActive: z.boolean().optional(),
    nutritionalInformation: ZNutritionalInformationModel.optional(),
});

export default ZSaveProductModel;