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

const ZSaveOneWorldSyncProductModel = z.object({
    productId: z.number().int().meta({}).nullish(),  
    productName: z.string().meta({}).nullish(),  
    gtin: z.string().meta({}).nullish(),  
    upc: z.string().meta({}).nullish(),  
    brandName: z.string().meta({}).nullish(),  
    ingredients: z.string().meta({}).nullish(),  
    productDescription: z.string().meta({}).nullish(),  
    vendor: z.string().meta({}).nullish(),  
    manufacturerId: z.number().int().meta({}).nullish(),  
    storageTypeId: z.number().int().meta({}).nullish(),  
    categoryName: z.string().meta({}).nullish(),  
    subCategory1Name: z.string().meta({}).nullish(),  
    subCategory2Name: z.string().meta({}).nullish(),  
    allergenKeyword: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    dataForm: z.string().meta({}).nullish(),  
    nutritionalInformation: ZNutritionalInformationModel.nullish(),  
});

export default ZSaveOneWorldSyncProductModel;