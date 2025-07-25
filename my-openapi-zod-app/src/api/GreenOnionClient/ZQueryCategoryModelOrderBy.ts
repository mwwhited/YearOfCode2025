//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

import type { IQueryCategoryModelOrderBy } from "./IQueryCategoryModelOrderBy";


export const ZQueryCategoryModelOrderBy: z.ZodType<IQueryCategoryModelOrderBy> = z.object({
    categoryId: z.string(),
    categoryName: z.string(),
    categoryCode: z.string(),
    isActive: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryCategoryModelOrderBy],[interface, IQueryCategoryModelOrderBy],[schema, ZQueryCategoryModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "categoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "categoryName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "categoryCode": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isActive": {
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
        "description": "**Filterable Properties:** CategoryId; CategoryName; CategoryCode; IsActive; CreatedOn; CreatedById; CreatedBy; UpdatedOn; UpdatedById; UpdatedBy",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryCategoryModel"
      }]
*/
