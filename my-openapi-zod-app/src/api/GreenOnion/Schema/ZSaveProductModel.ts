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
    productId: z.number().int().meta({}).nullish(),  
    productName: z.string().meta({}).nullish(),  
    gtin: z.string().meta({}).nullish(),  
    upc: z.string().meta({}).nullish(),  
    categoryId: z.number().int().meta({}).nullish(),  
    subCategoryId: z.number().int().meta({}).nullish(),  
    iocCategoryId: z.number().int().meta({}).nullish(),  
    ingredients: z.string().meta({}).nullish(),  
    brandName: z.string().meta({}).nullish(),  
    description: z.string().meta({}).nullish(),  
    allergenKeywords: z.string().meta({}).nullish(),  
    vendor: z.string().meta({}).nullish(),  
    manufacturerId: z.number().int().meta({}).nullish(),  
    storageTypeId: z.number().int().meta({}).nullish(),  
    productLabelPdfUrl: z.string().meta({}).nullish(),  
    manufacturerProductCode: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    nutritionalInformation: ZNutritionalInformationModel.nullish(),  
});

export default ZSaveProductModel;