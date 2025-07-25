//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryAllergenModelOrderBy } from "./IQueryAllergenModelOrderBy";

import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryAllergenModelOrderBy: z.ZodType<IQueryAllergenModelOrderBy> = z.object({
    allergenId: z.string(),
    allergenName: z.string(),
    allergenGroup: z.string(),
});
/*
[class, QueryAllergenModelOrderBy],[interface, IQueryAllergenModelOrderBy],[schema, ZQueryAllergenModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "allergenId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "allergenName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "allergenGroup": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** AllergenId; AllergenName; AllergenGroup",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryAllergenModel"
      }]
*/
