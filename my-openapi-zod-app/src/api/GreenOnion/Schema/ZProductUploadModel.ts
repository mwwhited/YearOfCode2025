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
    districtId: z.number().int().nullish().meta({}),  
    mrfcode: z.string().nullish().meta({}),  
    idnumber: z.number().int().nullish().meta({}),  
    ingredients: z.string().nullish().meta({}),  
    manufacturer: z.string().nullish().meta({}),  
    brandName: z.string().nullish().meta({}),  
    category: z.number().int().nullish().meta({}),  
    productName: z.string().nullish().meta({}),  
    subCategory1: z.number().int().nullish().meta({}),  
    subCategory2: z.number().int().nullish().meta({}),  
    distributor: z.string().nullish().meta({}),  
    serving: z.string().nullish().meta({}),  
    totalCalories: z.string().nullish().meta({}),  
    totalCarbohydrates: z.string().nullish().meta({}),  
    sugars: z.string().nullish().meta({}),  
    totalProtein: z.string().nullish().meta({}),  
    addedSugars: z.string().nullish().meta({}),  
    totalFat: z.string().nullish().meta({}),  
    saturatedFat: z.string().nullish().meta({}),  
    transFat: z.string().nullish().meta({}),  
    cholesterol: z.string().nullish().meta({}),  
    dietaryFiber: z.string().nullish().meta({}),  
    sodium: z.string().nullish().meta({}),  
    uploadPdf: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    createdon: z.string().nullish().meta({}),  
    modifiedon: z.string().nullish().meta({}),  
    createdby: z.number().int().nullish().meta({}),  
    modifiedby: z.number().int().nullish().meta({}),  
    districtName: z.string().nullish().meta({}),  
    upcGtin: z.string().nullish().meta({}),  
    allergens: z.number().int().nullish().meta({}),  
    image: z.string().nullish().meta({}),  
    h7: z.number().int().nullish().meta({}),  
    reviewflag: z.boolean().nullish().meta({}),  
    allergenKeyword: z.string().nullish().meta({}),  
    allergenreviewflag: z.boolean().nullish().meta({}),  
    productDescription: z.string().nullish().meta({}),  
    vendor: z.string().nullish().meta({}),  
    igGroup: z.string().nullish().meta({}),  
    gtin: z.string().nullish().meta({}),  
    upc: z.string().nullish().meta({}),  
    manufacturerId: z.number().int().nullish().meta({}),  
    status: z.boolean().nullish().meta({}),  
    statusMessage: z.string().nullish().meta({}),  
    isMapping: z.boolean().nullish().meta({}),  
});

export default ZProductUploadModel;