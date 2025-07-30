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
    productId: z.number().int().nullish().meta({}),  
    productName: z.string().nullish().meta({}),  
    gtin: z.string().nullish().meta({}),  
    upc: z.string().nullish().meta({}),  
    categoryId: z.number().int().nullish().meta({}),  
    subCategoryId: z.number().int().nullish().meta({}),  
    iocCategoryId: z.number().int().nullish().meta({}),  
    ingredients: z.string().nullish().meta({}),  
    brandName: z.string().nullish().meta({}),  
    description: z.string().nullish().meta({}),  
    allergenKeywords: z.string().nullish().meta({}),  
    vendor: z.string().nullish().meta({}),  
    manufacturerId: z.number().int().nullish().meta({}),  
    storageTypeId: z.number().int().nullish().meta({}),  
    productLabelPdfUrl: z.string().nullish().meta({}),  
    manufacturerProductCode: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    nutritionalInformation: ZNutritionalInformationModel.nullish(),  
});

export default ZSaveProductModel;