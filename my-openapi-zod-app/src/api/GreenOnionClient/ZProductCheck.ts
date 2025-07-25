//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IProductCheck } from "./IProductCheck";


export const ZProductCheck: z.ZodType<IProductCheck> = z.object({
    ischeck: z.string(),
    headerName: z.string(),
    headerValue: z.string(),
});
/*
[class, ProductCheck],[interface, IProductCheck],[schema, ZProductCheck],[definition, {
        "type": "object",
        "properties": {
          "ischeck": {
            "type": "boolean"
          },
          "headerName": {
            "type": "string",
            "nullable": true
          },
          "headerValue": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
