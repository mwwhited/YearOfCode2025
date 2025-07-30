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
    districtId: z.number().int().meta({}).nullish(),  
    mrfcode: z.string().meta({}).nullish(),  
    idnumber: z.number().int().meta({}).nullish(),  
    ingredients: z.string().meta({}).nullish(),  
    manufacturer: z.string().meta({}).nullish(),  
    brandName: z.string().meta({}).nullish(),  
    category: z.number().int().meta({}).nullish(),  
    productName: z.string().meta({}).nullish(),  
    subCategory1: z.number().int().meta({}).nullish(),  
    subCategory2: z.number().int().meta({}).nullish(),  
    distributor: z.string().meta({}).nullish(),  
    serving: z.string().meta({}).nullish(),  
    totalCalories: z.string().meta({}).nullish(),  
    totalCarbohydrates: z.string().meta({}).nullish(),  
    sugars: z.string().meta({}).nullish(),  
    totalProtein: z.string().meta({}).nullish(),  
    addedSugars: z.string().meta({}).nullish(),  
    totalFat: z.string().meta({}).nullish(),  
    saturatedFat: z.string().meta({}).nullish(),  
    transFat: z.string().meta({}).nullish(),  
    cholesterol: z.string().meta({}).nullish(),  
    dietaryFiber: z.string().meta({}).nullish(),  
    sodium: z.string().meta({}).nullish(),  
    uploadPdf: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
    createdon: z.string().meta({}).nullish(),  
    modifiedon: z.string().meta({}).nullish(),  
    createdby: z.number().int().meta({}).nullish(),  
    modifiedby: z.number().int().meta({}).nullish(),  
    districtName: z.string().meta({}).nullish(),  
    upcGtin: z.string().meta({}).nullish(),  
    allergens: z.number().int().meta({}).nullish(),  
    image: z.string().meta({}).nullish(),  
    h7: z.number().int().meta({}).nullish(),  
    reviewflag: z.boolean().meta({}).nullish(),  
    allergenKeyword: z.string().meta({}).nullish(),  
    allergenreviewflag: z.boolean().meta({}).nullish(),  
    productDescription: z.string().meta({}).nullish(),  
    vendor: z.string().meta({}).nullish(),  
    igGroup: z.string().meta({}).nullish(),  
    gtin: z.string().meta({}).nullish(),  
    upc: z.string().meta({}).nullish(),  
    manufacturerId: z.number().int().meta({}).nullish(),  
    status: z.boolean().meta({}).nullish(),  
    statusMessage: z.string().meta({}).nullish(),  
    isMapping: z.boolean().meta({}).nullish(),  
});

export default ZProductUploadModel;