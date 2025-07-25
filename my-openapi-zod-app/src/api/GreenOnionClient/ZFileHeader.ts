//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IFileHeader } from "./IFileHeader";


export const ZFileHeader: z.ZodType<IFileHeader> = z.object({
    headerId: z.string(),
    headerName: z.string(),
});
/*
[class, FileHeader],[interface, IFileHeader],[schema, ZFileHeader],[definition, {
        "type": "object",
        "properties": {
          "headerId": {
            "type": "integer",
            "format": "int32"
          },
          "headerName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
