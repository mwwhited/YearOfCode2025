//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryIocCategoryModelOrderBy } from "./IQueryIocCategoryModelOrderBy";

import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryIocCategoryModelOrderBy: z.ZodType<IQueryIocCategoryModelOrderBy> = z.object({
    iocCategoryId: z.string(),
    name: z.string(),
    color: z.string(),
});
/*
[class, QueryIocCategoryModelOrderBy],[interface, IQueryIocCategoryModelOrderBy],[schema, ZQueryIocCategoryModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "iocCategoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "name": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "color": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** IocCategoryId; Name; Color",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryIocCategoryModel"
      }]
*/
