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
    productId: z.number().int().optional(),
    productName: z.string().optional(),
    gtin: z.string().optional(),
    upc: z.string().optional(),
    brandName: z.string().optional(),
    ingredients: z.string().optional(),
    productDescription: z.string().optional(),
    vendor: z.string().optional(),
    manufacturerId: z.number().int().optional(),
    storageTypeId: z.number().int().optional(),
    categoryName: z.string().optional(),
    subCategory1Name: z.string().optional(),
    subCategory2Name: z.string().optional(),
    allergenKeyword: z.string().optional(),
    isActive: z.boolean().optional(),
    dataForm: z.string().optional(),
    nutritionalInformation: ZNutritionalInformationModel.optional(),
});

export default ZSaveOneWorldSyncProductModel;