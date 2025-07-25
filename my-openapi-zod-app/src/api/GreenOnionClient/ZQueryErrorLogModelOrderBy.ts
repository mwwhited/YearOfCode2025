//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryErrorLogModelOrderBy } from "./IQueryErrorLogModelOrderBy";

import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryErrorLogModelOrderBy: z.ZodType<IQueryErrorLogModelOrderBy> = z.object({
    errorLogId: z.string(),
    errorMessage: z.string(),
    errorPath: z.string(),
});
/*
[class, QueryErrorLogModelOrderBy],[interface, IQueryErrorLogModelOrderBy],[schema, ZQueryErrorLogModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "errorLogId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "errorMessage": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "errorPath": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** ErrorLogId; ErrorMessage; ErrorPath",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryErrorLogModel"
      }]
*/
