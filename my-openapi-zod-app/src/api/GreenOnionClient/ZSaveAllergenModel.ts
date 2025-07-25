//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveAllergenModel } from "./ISaveAllergenModel";


export const ZSaveAllergenModel: z.ZodType<ISaveAllergenModel> = z.object({
    allergenId: z.string(),
    allergenName: z.string(),
    allergenGroup: z.string(),
});
/*
[class, SaveAllergenModel],[interface, ISaveAllergenModel],[schema, ZSaveAllergenModel],[definition, {
        "type": "object",
        "properties": {
          "allergenId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "allergenName": {
            "type": "string",
            "nullable": true
          },
          "allergenGroup": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
