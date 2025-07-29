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

const ZProductUploadModel = z.object({
    districtId: z.number().int().nullish(),
    mrfcode: z.string().nullish(),
    idnumber: z.number().int().nullish(),
    ingredients: z.string().nullish(),
    manufacturer: z.string().nullish(),
    brandName: z.string().nullish(),
    category: z.number().int().nullish(),
    productName: z.string().nullish(),
    subCategory1: z.number().int().nullish(),
    subCategory2: z.number().int().nullish(),
    distributor: z.string().nullish(),
    serving: z.string().nullish(),
    totalCalories: z.string().nullish(),
    totalCarbohydrates: z.string().nullish(),
    sugars: z.string().nullish(),
    totalProtein: z.string().nullish(),
    addedSugars: z.string().nullish(),
    totalFat: z.string().nullish(),
    saturatedFat: z.string().nullish(),
    transFat: z.string().nullish(),
    cholesterol: z.string().nullish(),
    dietaryFiber: z.string().nullish(),
    sodium: z.string().nullish(),
    uploadPdf: z.string().nullish(),
    isActive: z.boolean().nullish(),
    createdon: z.string().nullish(),
    modifiedon: z.string().nullish(),
    createdby: z.number().int().nullish(),
    modifiedby: z.number().int().nullish(),
    districtName: z.string().nullish(),
    upcGtin: z.string().nullish(),
    allergens: z.number().int().nullish(),
    image: z.string().nullish(),
    h7: z.number().int().nullish(),
    reviewflag: z.boolean().nullish(),
    allergenKeyword: z.string().nullish(),
    allergenreviewflag: z.boolean().nullish(),
    productDescription: z.string().nullish(),
    vendor: z.string().nullish(),
    igGroup: z.string().nullish(),
    gtin: z.string().nullish(),
    upc: z.string().nullish(),
    manufacturerId: z.number().int().nullish(),
    status: z.boolean().nullish(),
    statusMessage: z.string().nullish(),
    isMapping: z.boolean().nullish(),
});

export default ZProductUploadModel;