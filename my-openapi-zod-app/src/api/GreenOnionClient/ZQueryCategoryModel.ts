//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryCategoryModel } from "./IQueryCategoryModel";


export const ZQueryCategoryModel: z.ZodType<IQueryCategoryModel> = z.object({
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
[class, QueryCategoryModel],[interface, IQueryCategoryModel],[schema, ZQueryCategoryModel],[definition, {
        "type": "object",
        "properties": {
          "categoryId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "categoryName": {
            "type": "string",
            "nullable": true
          },
          "categoryCode": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
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
