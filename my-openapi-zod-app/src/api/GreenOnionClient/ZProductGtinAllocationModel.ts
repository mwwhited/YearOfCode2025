//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IProductGtinAllocationModel } from "./IProductGtinAllocationModel";


export const ZProductGtinAllocationModel: z.ZodType<IProductGtinAllocationModel> = z.object({
    productId: z.string(),
    gtin: z.string(),
    isActive: z.string(),
    createdBy: z.string(),
});
/*
[class, ProductGtinAllocationModel],[interface, IProductGtinAllocationModel],[schema, ZProductGtinAllocationModel],[definition, {
        "type": "object",
        "properties": {
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "gtin": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
          },
          "createdBy": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
