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
import { ZQueryAllergenModelFilter } from "./ZQueryAllergenModelFilter";
import type { IQueryAllergenModelOrderBy } from "./IQueryAllergenModelOrderBy";
import { ZQueryAllergenModelOrderBy } from "./ZQueryAllergenModelOrderBy";

import type { IQueryAllergenModelSearchQuery } from "./IQueryAllergenModelSearchQuery";


export const ZQueryAllergenModelSearchQuery: z.ZodType<IQueryAllergenModelSearchQuery> = z.object({
    currentPage: z.string(),
    pageSize: z.string(),
    excludePageCount: z.string(),
    searchTerm: z.string(),
    filter: z.string(),
    orderBy: z.string(),
});
/*
[class, QueryAllergenModelSearchQuery],[interface, IQueryAllergenModelSearchQuery],[schema, ZQueryAllergenModelSearchQuery],[definition, {
        "type": "object",
        "properties": {
          "currentPage": {
            "type": "integer",
            "description": "Gets or sets the current page number.",
            "format": "int32"
          },
          "pageSize": {
            "type": "integer",
            "description": "**Default size:** `10`, `-1` will disable paging",
            "format": "int32"
          },
          "excludePageCount": {
            "type": "boolean",
            "description": "`true` will disable row/page counts and may decrease processing time without effecting paging functions"
          },
          "searchTerm": {
            "type": "string",
            "description": "**Searched Properties:** AllergenName; AllergenGroup",
            "nullable": true
          },
          "filter": {
            "$ref": "#/components/schemas/GreenOnion.Common.Models.QueryAllergenModelFilter"
          },
          "orderBy": {
            "$ref": "#/components/schemas/GreenOnion.Common.Models.QueryAllergenModelOrderBy"
          }
        },
        "additionalProperties": false,
        "description": "Represents a search query with filtering and sorting options for a specific model.",
        "x-query-set": "GreenOnion.Common.Models.QueryAllergenModel"
      }]
*/
