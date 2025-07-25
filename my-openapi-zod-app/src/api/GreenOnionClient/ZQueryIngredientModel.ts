//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryIngredientModel } from "./IQueryIngredientModel";


export const ZQueryIngredientModel: z.ZodType<IQueryIngredientModel> = z.object({
    ingredientId: z.string(),
    ingredientName: z.string(),
    group: z.string(),
    iocGroup: z.string(),
});
/*
[class, QueryIngredientModel],[interface, IQueryIngredientModel],[schema, ZQueryIngredientModel],[definition, {
        "type": "object",
        "properties": {
          "ingredientId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "ingredientName": {
            "type": "string",
            "nullable": true
          },
          "group": {
            "type": "string",
            "nullable": true
          },
          "iocGroup": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
