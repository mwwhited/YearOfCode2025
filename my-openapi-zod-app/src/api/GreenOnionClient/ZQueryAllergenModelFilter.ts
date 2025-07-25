//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryAllergenModelFilter } from "./IQueryAllergenModelFilter";

import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryAllergenModelFilter: z.ZodType<IQueryAllergenModelFilter> = z.object({
    allergenId: z.string(),
    allergenName: z.string(),
    allergenGroup: z.string(),
});
/*
[class, QueryAllergenModelFilter],[interface, IQueryAllergenModelFilter],[schema, ZQueryAllergenModelFilter],[definition, {
        "type": "object",
        "properties": {
          "allergenId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "allergenName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "allergenGroup": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** AllergenId; AllergenName; AllergenGroup",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryAllergenModel"
      }]
*/
