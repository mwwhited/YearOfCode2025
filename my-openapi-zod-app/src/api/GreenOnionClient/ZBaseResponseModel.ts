//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IBaseResponseModel } from "./IBaseResponseModel";


export const ZBaseResponseModel: z.ZodType<IBaseResponseModel> = z.object({
    success: z.string(),
    message: z.string(),
    totalRecords: z.string(),
    payload: z.string(),
});
/*
[class, BaseResponseModel],[interface, IBaseResponseModel],[schema, ZBaseResponseModel],[definition, {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "nullable": true
          },
          "message": {
            "type": "string",
            "nullable": true
          },
          "totalRecords": {
            "type": "integer",
            "format": "int32"
          },
          "payload": {
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
