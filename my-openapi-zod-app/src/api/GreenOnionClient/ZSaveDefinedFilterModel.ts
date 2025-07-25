//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveDefinedFilterModel } from "./ISaveDefinedFilterModel";


export const ZSaveDefinedFilterModel: z.ZodType<ISaveDefinedFilterModel> = z.object({
    definedFilterId: z.string(),
    path: z.string(),
    name: z.string(),
    isActive: z.string(),
    state: z.string(),
});
/*
[class, SaveDefinedFilterModel],[interface, ISaveDefinedFilterModel],[schema, ZSaveDefinedFilterModel],[definition, {
        "type": "object",
        "properties": {
          "definedFilterId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-key": true
          },
          "path": {
            "type": "string",
            "nullable": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean"
          },
          "state": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
