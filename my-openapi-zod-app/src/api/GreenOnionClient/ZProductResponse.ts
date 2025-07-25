//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IProductResponse } from "./IProductResponse";


export const ZProductResponse: z.ZodType<IProductResponse> = z.object({
    success: z.string(),
    message: z.string(),
    totalRecords: z.string(),
    payload: z.string(),
    isUpdate: z.string(),
    isAdded: z.string(),
    isDelete: z.string(),
});
/*
[class, ProductResponse],[interface, IProductResponse],[schema, ZProductResponse],[definition, {
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
          },
          "isUpdate": {
            "type": "boolean"
          },
          "isAdded": {
            "type": "boolean"
          },
          "isDelete": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }]
*/
