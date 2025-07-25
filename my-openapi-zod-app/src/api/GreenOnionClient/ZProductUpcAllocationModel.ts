//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IProductUpcAllocationModel } from "./IProductUpcAllocationModel";


export const ZProductUpcAllocationModel: z.ZodType<IProductUpcAllocationModel> = z.object({
    productId: z.string(),
    upc: z.string(),
    isActive: z.string(),
    createdBy: z.string(),
});
/*
[class, ProductUpcAllocationModel],[interface, IProductUpcAllocationModel],[schema, ZProductUpcAllocationModel],[definition, {
        "type": "object",
        "properties": {
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "upc": {
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
