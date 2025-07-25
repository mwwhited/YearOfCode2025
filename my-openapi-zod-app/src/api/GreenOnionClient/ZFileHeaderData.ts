//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IFileHeaderData } from "./IFileHeaderData";


export const ZFileHeaderData: z.ZodType<IFileHeaderData> = z.object({
    headerDataId: z.string(),
    headerDataName: z.string(),
    headerDataValue: z.string(),
});
/*
[class, FileHeaderData],[interface, IFileHeaderData],[schema, ZFileHeaderData],[definition, {
        "type": "object",
        "properties": {
          "headerDataId": {
            "type": "integer",
            "format": "int32"
          },
          "headerDataName": {
            "type": "string",
            "nullable": true
          },
          "headerDataValue": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
