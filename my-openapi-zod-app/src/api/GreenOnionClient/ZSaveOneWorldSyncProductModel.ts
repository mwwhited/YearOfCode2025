//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveOneWorldSyncProductModel } from "./ISaveOneWorldSyncProductModel";

import type { INutritionalInformationModel } from "./INutritionalInformationModel";
import { ZNutritionalInformationModel } from "./ZNutritionalInformationModel";

export const ZSaveOneWorldSyncProductModel: z.ZodType<ISaveOneWorldSyncProductModel> = z.object({
    productId: z.string(),
    productName: z.string(),
    gtin: z.string(),
    upc: z.string(),
    brandName: z.string(),
    ingredients: z.string(),
    productDescription: z.string(),
    vendor: z.string(),
    manufacturerId: z.string(),
    storageTypeId: z.string(),
    categoryName: z.string(),
    subCategory1Name: z.string(),
    subCategory2Name: z.string(),
    allergenKeyword: z.string(),
    isActive: z.string(),
    dataForm: z.string(),
    nutritionalInformation: z.string(),
});
/*
[class, SaveOneWorldSyncProductModel],[interface, ISaveOneWorldSyncProductModel],[schema, ZSaveOneWorldSyncProductModel],[definition, {
        "type": "object",
        "properties": {
          "productId": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "productName": {
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
          "brandName": {
            "type": "string",
            "nullable": true
          },
          "ingredients": {
            "type": "string",
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
          "manufacturerId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "storageTypeId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "categoryName": {
            "type": "string",
            "nullable": true
          },
          "subCategory1Name": {
            "type": "string",
            "nullable": true
          },
          "subCategory2Name": {
            "type": "string",
            "nullable": true
          },
          "allergenKeyword": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
          },
          "dataForm": {
            "type": "string",
            "nullable": true
          },
          "nutritionalInformation": {
            "$ref": "#/components/schemas/GreenOnion.Common.Models.NutritionalInformationModel"
          }
        },
        "additionalProperties": false
      }]
*/
