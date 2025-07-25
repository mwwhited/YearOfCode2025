//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";
import { ZNutritionalInformationModel } from "./ZNutritionalInformationModel";

import type { IQueryProductModel } from "./IQueryProductModel";


export const ZQueryProductModel: z.ZodType<IQueryProductModel> = z.object({
    productId: z.string(),
    name: z.string(),
    description: z.string(),
    gtin: z.string(),
    upc: z.string(),
    images: z.string(),
    isActive: z.string(),
    manufacturerId: z.string(),
    manufacturerName: z.string(),
    iocCategoryId: z.string(),
    iocCategory: z.string(),
    categoryId: z.string(),
    category: z.string(),
    subCategoryId: z.string(),
    subCategory: z.string(),
    storageTypeId: z.string(),
    storageTypeName: z.string(),
    ingredients: z.string(),
    isAllocated: z.string(),
    hasAllergens: z.string(),
    hasOneWorldSyncProduct: z.string(),
    oneWorldSyncProductId: z.string(),
    hasProduct: z.string(),
    hasSuggestedProducts: z.string(),
    hasApprovedSuggestedProducts: z.string(),
    isSuggestedProduct: z.string(),
    isApprovedSuggestedProduct: z.string(),
    nutritionalInformation: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryProductModel],[interface, IQueryProductModel],[schema, ZQueryProductModel],[definition, {
        "type": "object",
        "properties": {
          "productId": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "x-navigation-key": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "description": {
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
          "images": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "isActive": {
            "type": "boolean"
          },
          "manufacturerId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryManufacturerModel"
          },
          "manufacturerName": {
            "type": "string",
            "nullable": true
          },
          "iocCategoryId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryIocCategoryModel"
          },
          "iocCategory": {
            "type": "string",
            "nullable": true
          },
          "categoryId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryCategoryModel"
          },
          "category": {
            "type": "string",
            "nullable": true
          },
          "subCategoryId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QuerySubCategoryModel"
          },
          "subCategory": {
            "type": "string",
            "nullable": true
          },
          "storageTypeId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryStorageTypeModel"
          },
          "storageTypeName": {
            "type": "string",
            "nullable": true
          },
          "ingredients": {
            "type": "string",
            "nullable": true
          },
          "isAllocated": {
            "type": "boolean"
          },
          "hasAllergens": {
            "type": "boolean"
          },
          "hasOneWorldSyncProduct": {
            "type": "boolean"
          },
          "oneWorldSyncProductId": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryOneWorldSyncProductModel"
          },
          "hasProduct": {
            "type": "boolean"
          },
          "hasSuggestedProducts": {
            "type": "boolean"
          },
          "hasApprovedSuggestedProducts": {
            "type": "boolean"
          },
          "isSuggestedProduct": {
            "type": "boolean"
          },
          "isApprovedSuggestedProduct": {
            "type": "boolean"
          },
          "nutritionalInformation": {
            "$ref": "#/components/schemas/GreenOnion.Common.Models.NutritionalInformationModel"
          },
          "createdOn": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "createdById": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryUserModel"
          },
          "createdBy": {
            "type": "string",
            "nullable": true
          },
          "updatedOn": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "updatedById": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryUserModel"
          },
          "updatedBy": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
