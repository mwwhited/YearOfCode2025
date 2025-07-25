//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

import type { IQueryErrorLogModelFilter } from "./IQueryErrorLogModelFilter";


export const ZQueryErrorLogModelFilter: z.ZodType<IQueryErrorLogModelFilter> = z.object({
    errorLogId: z.string(),
    errorMessage: z.string(),
    errorPath: z.string(),
});
/*
[class, QueryErrorLogModelFilter],[interface, IQueryErrorLogModelFilter],[schema, ZQueryErrorLogModelFilter],[definition, {
        "type": "object",
        "properties": {
          "errorLogId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "errorMessage": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "errorPath": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** ErrorLogId; ErrorMessage; ErrorPath",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryErrorLogModel"
      }]
*/
