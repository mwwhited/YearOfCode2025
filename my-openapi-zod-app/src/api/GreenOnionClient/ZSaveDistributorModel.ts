//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveDistributorModel } from "./ISaveDistributorModel";


export const ZSaveDistributorModel: z.ZodType<ISaveDistributorModel> = z.object({
    distributorId: z.string(),
    distributorName: z.string(),
    distributorCode: z.string(),
    isActive: z.string(),
});
/*
[class, SaveDistributorModel],[interface, ISaveDistributorModel],[schema, ZSaveDistributorModel],[definition, {
        "type": "object",
        "properties": {
          "distributorId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "distributorName": {
            "type": "string",
            "nullable": true
          },
          "distributorCode": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
