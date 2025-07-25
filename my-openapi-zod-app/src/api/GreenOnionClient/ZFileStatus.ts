//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IFileStatus } from "./IFileStatus";


export const ZFileStatus: z.ZodType<IFileStatus> = z.object({
    status: z.string(),
    reason: z.string(),
});
/*
[class, FileStatus],[interface, IFileStatus],[schema, ZFileStatus],[definition, {
        "type": "object",
        "properties": {
          "status": {
            "type": "boolean"
          },
          "reason": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
