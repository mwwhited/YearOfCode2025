//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveManufacturerModel } from "./ISaveManufacturerModel";


export const ZSaveManufacturerModel: z.ZodType<ISaveManufacturerModel> = z.object({
    manufacturerId: z.string(),
    manufacturerName: z.string(),
    glnNumber: z.string(),
    isActive: z.string(),
});
/*
[class, SaveManufacturerModel],[interface, ISaveManufacturerModel],[schema, ZSaveManufacturerModel],[definition, {
        "type": "object",
        "properties": {
          "manufacturerId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "manufacturerName": {
            "type": "string",
            "nullable": true
          },
          "glnNumber": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }]
*/
