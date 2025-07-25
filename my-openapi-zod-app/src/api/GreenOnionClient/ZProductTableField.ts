//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IProductTableField } from "./IProductTableField";


export const ZProductTableField: z.ZodType<IProductTableField> = z.object({
    fieldID: z.string(),
    fieldName: z.string(),
});
/*
[class, ProductTableField],[interface, IProductTableField],[schema, ZProductTableField],[definition, {
        "type": "object",
        "properties": {
          "fieldID": {
            "type": "integer",
            "format": "int32"
          },
          "fieldName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
