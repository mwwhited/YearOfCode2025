//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryErrorLogModel } from "./IQueryErrorLogModel";


export const ZQueryErrorLogModel: z.ZodType<IQueryErrorLogModel> = z.object({
    errorLogId: z.string(),
    errorMessage: z.string(),
    errorPath: z.string(),
});
/*
[class, QueryErrorLogModel],[interface, IQueryErrorLogModel],[schema, ZQueryErrorLogModel],[definition, {
        "type": "object",
        "properties": {
          "errorLogId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "errorMessage": {
            "type": "string",
            "nullable": true
          },
          "errorPath": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
