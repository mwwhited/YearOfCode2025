//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryIngredientModelFilter } from "./IQueryIngredientModelFilter";

import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryIngredientModelFilter: z.ZodType<IQueryIngredientModelFilter> = z.object({
    ingredientId: z.string(),
    ingredientName: z.string(),
    group: z.string(),
    iocGroup: z.string(),
});
/*
[class, QueryIngredientModelFilter],[interface, IQueryIngredientModelFilter],[schema, ZQueryIngredientModelFilter],[definition, {
        "type": "object",
        "properties": {
          "ingredientId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "ingredientName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "group": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "iocGroup": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** IngredientId; IngredientName; Group; IocGroup",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryIngredientModel"
      }]
*/
