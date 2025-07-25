//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryStateModel } from "./IQueryStateModel";


export const ZQueryStateModel: z.ZodType<IQueryStateModel> = z.object({
    stateId: z.string(),
    stateName: z.string(),
});
/*
[class, QueryStateModel],[interface, IQueryStateModel],[schema, ZQueryStateModel],[definition, {
        "type": "object",
        "properties": {
          "stateId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "stateName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
