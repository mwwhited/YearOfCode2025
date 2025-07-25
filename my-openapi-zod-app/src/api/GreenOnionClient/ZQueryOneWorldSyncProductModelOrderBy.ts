//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryOneWorldSyncProductModelOrderBy } from "./IQueryOneWorldSyncProductModelOrderBy";

import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryOneWorldSyncProductModelOrderBy: z.ZodType<IQueryOneWorldSyncProductModelOrderBy> = z.object({
    productId: z.string(),
    name: z.string(),
    description: z.string(),
    gtin: z.string(),
    upc: z.string(),
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
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryOneWorldSyncProductModelOrderBy],[interface, IQueryOneWorldSyncProductModelOrderBy],[schema, ZQueryOneWorldSyncProductModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "productId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "name": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "description": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "gtin": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "upc": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isActive": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "manufacturerId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "manufacturerName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "iocCategoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "iocCategory": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "categoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "category": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "subCategoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "subCategory": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "storageTypeId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "storageTypeName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "ingredients": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isAllocated": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "hasAllergens": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "hasOneWorldSyncProduct": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "oneWorldSyncProductId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "hasProduct": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "hasSuggestedProducts": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "hasApprovedSuggestedProducts": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isSuggestedProduct": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isApprovedSuggestedProduct": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "createdOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "createdById": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "createdBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "updatedOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "updatedById": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "updatedBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** ProductId; Name; Description; Gtin; Upc; IsActive; ManufacturerId; ManufacturerName; IocCategoryId; IocCategory; CategoryId; Category; SubCategoryId; SubCategory; StorageTypeId; StorageTypeName; Ingredients; IsAllocated; HasAllergens; HasOneWorldSyncProduct; OneWorldSyncProductId; HasProduct; HasSuggestedProducts; HasApprovedSuggestedProducts; IsSuggestedProduct; IsApprovedSuggestedProduct; CreatedOn; CreatedById; CreatedBy; UpdatedOn; UpdatedById; UpdatedBy",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryOneWorldSyncProductModel"
      }]
*/
