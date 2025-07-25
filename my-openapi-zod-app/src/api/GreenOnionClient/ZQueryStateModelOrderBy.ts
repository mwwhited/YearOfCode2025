//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

import type { IQueryStateModelOrderBy } from "./IQueryStateModelOrderBy";


export const ZQueryStateModelOrderBy: z.ZodType<IQueryStateModelOrderBy> = z.object({
    stateId: z.string(),
    stateName: z.string(),
});
/*
[class, QueryStateModelOrderBy],[interface, IQueryStateModelOrderBy],[schema, ZQueryStateModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "stateId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "stateName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** StateId; StateName",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryStateModel"
      }]
*/
