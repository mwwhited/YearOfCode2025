//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryOneWorldSyncProductModelFilter } from "./IQueryOneWorldSyncProductModelFilter";

import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryOneWorldSyncProductModelFilter: z.ZodType<IQueryOneWorldSyncProductModelFilter> = z.object({
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
[class, QueryOneWorldSyncProductModelFilter],[interface, IQueryOneWorldSyncProductModelFilter],[schema, ZQueryOneWorldSyncProductModelFilter],[definition, {
        "type": "object",
        "properties": {
          "productId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "name": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "description": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "gtin": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "upc": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isActive": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "manufacturerId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "manufacturerName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "iocCategoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "iocCategory": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "categoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "category": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "subCategoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "subCategory": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "storageTypeId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "storageTypeName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "ingredients": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isAllocated": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "hasAllergens": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "hasOneWorldSyncProduct": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "oneWorldSyncProductId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "hasProduct": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "hasSuggestedProducts": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "hasApprovedSuggestedProducts": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isSuggestedProduct": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isApprovedSuggestedProduct": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "createdOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "createdById": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "createdBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "updatedOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "updatedById": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "updatedBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** ProductId; Name; Description; Gtin; Upc; IsActive; ManufacturerId; ManufacturerName; IocCategoryId; IocCategory; CategoryId; Category; SubCategoryId; SubCategory; StorageTypeId; StorageTypeName; Ingredients; IsAllocated; HasAllergens; HasOneWorldSyncProduct; OneWorldSyncProductId; HasProduct; HasSuggestedProducts; HasApprovedSuggestedProducts; IsSuggestedProduct; IsApprovedSuggestedProduct; CreatedOn; CreatedById; CreatedBy; UpdatedOn; UpdatedById; UpdatedBy",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryOneWorldSyncProductModel"
      }]
*/
