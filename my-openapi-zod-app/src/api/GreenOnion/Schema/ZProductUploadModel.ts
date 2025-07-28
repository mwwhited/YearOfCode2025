//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZProductUploadModel = z.object({
    districtId: z.number().int().optional(),
    mrfcode: z.string().optional(),
    idnumber: z.number().int().optional(),
    ingredients: z.string().optional(),
    manufacturer: z.string().optional(),
    brandName: z.string().optional(),
    category: z.number().int().optional(),
    productName: z.string().optional(),
    subCategory1: z.number().int().optional(),
    subCategory2: z.number().int().optional(),
    distributor: z.string().optional(),
    serving: z.string().optional(),
    totalCalories: z.string().optional(),
    totalCarbohydrates: z.string().optional(),
    sugars: z.string().optional(),
    totalProtein: z.string().optional(),
    addedSugars: z.string().optional(),
    totalFat: z.string().optional(),
    saturatedFat: z.string().optional(),
    transFat: z.string().optional(),
    cholesterol: z.string().optional(),
    dietaryFiber: z.string().optional(),
    sodium: z.string().optional(),
    uploadPdf: z.string().optional(),
    isActive: z.boolean().optional(),
    createdon: z.string().optional(),
    modifiedon: z.string().optional(),
    createdby: z.number().int().optional(),
    modifiedby: z.number().int().optional(),
    districtName: z.string().optional(),
    upcGtin: z.string().optional(),
    allergens: z.number().int().optional(),
    image: z.string().optional(),
    h7: z.number().int().optional(),
    reviewflag: z.boolean().optional(),
    allergenKeyword: z.string().optional(),
    allergenreviewflag: z.boolean().optional(),
    productDescription: z.string().optional(),
    vendor: z.string().optional(),
    igGroup: z.string().optional(),
    gtin: z.string().optional(),
    upc: z.string().optional(),
    manufacturerId: z.number().int().optional(),
    status: z.boolean().optional(),
    statusMessage: z.string().optional(),
    isMapping: z.boolean().optional(),
});

export default ZProductUploadModel;