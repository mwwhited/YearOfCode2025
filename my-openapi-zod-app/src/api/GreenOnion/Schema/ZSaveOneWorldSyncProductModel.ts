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
    productId: z.number().int().nullish(),
    productName: z.string().nullish(),
    gtin: z.string().nullish(),
    upc: z.string().nullish(),
    brandName: z.string().nullish(),
    ingredients: z.string().nullish(),
    productDescription: z.string().nullish(),
    vendor: z.string().nullish(),
    manufacturerId: z.number().int().nullish(),
    storageTypeId: z.number().int().nullish(),
    categoryName: z.string().nullish(),
    subCategory1Name: z.string().nullish(),
    subCategory2Name: z.string().nullish(),
    allergenKeyword: z.string().nullish(),
    isActive: z.boolean().nullish(),
    dataForm: z.string().nullish(),
    nutritionalInformation: ZNutritionalInformationModel.nullish(),
});

export default ZSaveOneWorldSyncProductModel;