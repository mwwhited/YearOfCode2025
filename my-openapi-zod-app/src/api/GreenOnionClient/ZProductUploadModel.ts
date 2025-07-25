//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IProductUploadModel } from "./IProductUploadModel";


export const ZProductUploadModel: z.ZodType<IProductUploadModel> = z.object({
    districtId: z.string(),
    mrfcode: z.string(),
    idnumber: z.string(),
    ingredients: z.string(),
    manufacturer: z.string(),
    brandName: z.string(),
    category: z.string(),
    productName: z.string(),
    subCategory1: z.string(),
    subCategory2: z.string(),
    distributor: z.string(),
    serving: z.string(),
    totalCalories: z.string(),
    totalCarbohydrates: z.string(),
    sugars: z.string(),
    totalProtein: z.string(),
    addedSugars: z.string(),
    totalFat: z.string(),
    saturatedFat: z.string(),
    transFat: z.string(),
    cholesterol: z.string(),
    dietaryFiber: z.string(),
    sodium: z.string(),
    uploadPdf: z.string(),
    isActive: z.string(),
    createdon: z.string(),
    modifiedon: z.string(),
    createdby: z.string(),
    modifiedby: z.string(),
    districtName: z.string(),
    upcGtin: z.string(),
    allergens: z.string(),
    image: z.string(),
    h7: z.string(),
    reviewflag: z.string(),
    allergenKeyword: z.string(),
    allergenreviewflag: z.string(),
    productDescription: z.string(),
    vendor: z.string(),
    igGroup: z.string(),
    gtin: z.string(),
    upc: z.string(),
    manufacturerId: z.string(),
    status: z.string(),
    statusMessage: z.string(),
    isMapping: z.string(),
});
/*
[class, ProductUploadModel],[interface, IProductUploadModel],[schema, ZProductUploadModel],[definition, {
        "type": "object",
        "properties": {
          "districtId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "mrfcode": {
            "type": "string",
            "nullable": true
          },
          "idnumber": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "ingredients": {
            "type": "string",
            "nullable": true
          },
          "manufacturer": {
            "type": "string",
            "nullable": true
          },
          "brandName": {
            "type": "string",
            "nullable": true
          },
          "category": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "productName": {
            "type": "string",
            "nullable": true
          },
          "subCategory1": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "subCategory2": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "distributor": {
            "type": "string",
            "nullable": true
          },
          "serving": {
            "type": "string",
            "nullable": true
          },
          "totalCalories": {
            "type": "string",
            "nullable": true
          },
          "totalCarbohydrates": {
            "type": "string",
            "nullable": true
          },
          "sugars": {
            "type": "string",
            "nullable": true
          },
          "totalProtein": {
            "type": "string",
            "nullable": true
          },
          "addedSugars": {
            "type": "string",
            "nullable": true
          },
          "totalFat": {
            "type": "string",
            "nullable": true
          },
          "saturatedFat": {
            "type": "string",
            "nullable": true
          },
          "transFat": {
            "type": "string",
            "nullable": true
          },
          "cholesterol": {
            "type": "string",
            "nullable": true
          },
          "dietaryFiber": {
            "type": "string",
            "nullable": true
          },
          "sodium": {
            "type": "string",
            "nullable": true
          },
          "uploadPdf": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
          },
          "createdon": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "modifiedon": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "createdby": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "modifiedby": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "districtName": {
            "type": "string",
            "nullable": true
          },
          "upcGtin": {
            "type": "string",
            "nullable": true
          },
          "allergens": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "image": {
            "type": "string",
            "nullable": true
          },
          "h7": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "reviewflag": {
            "type": "boolean",
            "nullable": true
          },
          "allergenKeyword": {
            "type": "string",
            "nullable": true
          },
          "allergenreviewflag": {
            "type": "boolean",
            "nullable": true
          },
          "productDescription": {
            "type": "string",
            "nullable": true
          },
          "vendor": {
            "type": "string",
            "nullable": true
          },
          "igGroup": {
            "type": "string",
            "nullable": true
          },
          "gtin": {
            "type": "string",
            "nullable": true
          },
          "upc": {
            "type": "string",
            "nullable": true
          },
          "manufacturerId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "status": {
            "type": "boolean",
            "nullable": true
          },
          "statusMessage": {
            "type": "string",
            "nullable": true
          },
          "isMapping": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }]
*/
