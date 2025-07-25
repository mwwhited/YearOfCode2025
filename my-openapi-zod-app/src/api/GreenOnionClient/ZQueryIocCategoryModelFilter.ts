//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryIocCategoryModelFilter } from "./IQueryIocCategoryModelFilter";

import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryIocCategoryModelFilter: z.ZodType<IQueryIocCategoryModelFilter> = z.object({
    iocCategoryId: z.string(),
    name: z.string(),
    color: z.string(),
});
/*
[class, QueryIocCategoryModelFilter],[interface, IQueryIocCategoryModelFilter],[schema, ZQueryIocCategoryModelFilter],[definition, {
        "type": "object",
        "properties": {
          "iocCategoryId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "name": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "color": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** IocCategoryId; Name; Color",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryIocCategoryModel"
      }]
*/
