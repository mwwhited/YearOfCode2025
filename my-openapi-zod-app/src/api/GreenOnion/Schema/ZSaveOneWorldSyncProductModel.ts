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
    productId: z.number().int().nullish().meta({}),  
    productName: z.string().nullish().meta({}),  
    gtin: z.string().nullish().meta({}),  
    upc: z.string().nullish().meta({}),  
    brandName: z.string().nullish().meta({}),  
    ingredients: z.string().nullish().meta({}),  
    productDescription: z.string().nullish().meta({}),  
    vendor: z.string().nullish().meta({}),  
    manufacturerId: z.number().int().nullish().meta({}),  
    storageTypeId: z.number().int().nullish().meta({}),  
    categoryName: z.string().nullish().meta({}),  
    subCategory1Name: z.string().nullish().meta({}),  
    subCategory2Name: z.string().nullish().meta({}),  
    allergenKeyword: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    dataForm: z.string().nullish().meta({}),  
    nutritionalInformation: ZNutritionalInformationModel.nullish(),  
});

export default ZSaveOneWorldSyncProductModel;