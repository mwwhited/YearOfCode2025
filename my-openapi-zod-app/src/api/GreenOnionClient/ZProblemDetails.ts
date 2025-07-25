//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IProblemDetails } from "./IProblemDetails";


export const ZProblemDetails: z.ZodType<IProblemDetails> = z.object({
    type: z.string(),
    title: z.string(),
    status: z.string(),
    detail: z.string(),
    instance: z.string(),
});
/*
[class, ProblemDetails],[interface, IProblemDetails],[schema, ZProblemDetails],[definition, {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "nullable": true
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "status": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "detail": {
            "type": "string",
            "nullable": true
          },
          "instance": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": { }
      }]
*/
