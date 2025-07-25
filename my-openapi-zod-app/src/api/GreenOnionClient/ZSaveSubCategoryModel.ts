//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveSubCategoryModel } from "./ISaveSubCategoryModel";


export const ZSaveSubCategoryModel: z.ZodType<ISaveSubCategoryModel> = z.object({
    subCategoryId: z.string(),
    categoryId: z.string(),
    subCategoryName: z.string(),
    subCategoryCode: z.string(),
    isActive: z.string(),
});
/*
[class, SaveSubCategoryModel],[interface, ISaveSubCategoryModel],[schema, ZSaveSubCategoryModel],[definition, {
        "type": "object",
        "properties": {
          "subCategoryId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "categoryId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "subCategoryName": {
            "type": "string",
            "nullable": true
          },
          "subCategoryCode": {
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
