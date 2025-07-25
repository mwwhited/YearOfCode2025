//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryIocCategoryModel } from "./IQueryIocCategoryModel";


export const ZQueryIocCategoryModel: z.ZodType<IQueryIocCategoryModel> = z.object({
    iocCategoryId: z.string(),
    name: z.string(),
    color: z.string(),
});
/*
[class, QueryIocCategoryModel],[interface, IQueryIocCategoryModel],[schema, ZQueryIocCategoryModel],[definition, {
        "type": "object",
        "properties": {
          "iocCategoryId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "color": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
