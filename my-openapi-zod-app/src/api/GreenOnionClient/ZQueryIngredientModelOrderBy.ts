//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryIngredientModelOrderBy } from "./IQueryIngredientModelOrderBy";

import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryIngredientModelOrderBy: z.ZodType<IQueryIngredientModelOrderBy> = z.object({
    ingredientId: z.string(),
    ingredientName: z.string(),
    group: z.string(),
    iocGroup: z.string(),
});
/*
[class, QueryIngredientModelOrderBy],[interface, IQueryIngredientModelOrderBy],[schema, ZQueryIngredientModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "ingredientId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "ingredientName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "group": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "iocGroup": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** IngredientId; IngredientName; Group; IocGroup",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryIngredientModel"
      }]
*/
