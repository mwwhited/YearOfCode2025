//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryStateModelFilter } from "./IQueryStateModelFilter";

import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryStateModelFilter: z.ZodType<IQueryStateModelFilter> = z.object({
    stateId: z.string(),
    stateName: z.string(),
});
/*
[class, QueryStateModelFilter],[interface, IQueryStateModelFilter],[schema, ZQueryStateModelFilter],[definition, {
        "type": "object",
        "properties": {
          "stateId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "stateName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** StateId; StateName",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryStateModel"
      }]
*/
