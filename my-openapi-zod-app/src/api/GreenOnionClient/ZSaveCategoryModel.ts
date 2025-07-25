//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveCategoryModel } from "./ISaveCategoryModel";


export const ZSaveCategoryModel: z.ZodType<ISaveCategoryModel> = z.object({
    categoryId: z.string(),
    categoryName: z.string(),
    categoryCode: z.string(),
    isActive: z.string(),
});
/*
[class, SaveCategoryModel],[interface, ISaveCategoryModel],[schema, ZSaveCategoryModel],[definition, {
        "type": "object",
        "properties": {
          "categoryId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
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
          }
        },
        "additionalProperties": false
      }]
*/
