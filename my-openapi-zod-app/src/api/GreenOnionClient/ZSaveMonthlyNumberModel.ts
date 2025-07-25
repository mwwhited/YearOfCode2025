//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveMonthlyNumberModel } from "./ISaveMonthlyNumberModel";


export const ZSaveMonthlyNumberModel: z.ZodType<ISaveMonthlyNumberModel> = z.object({
    id: z.string(),
    schoolDistrictId: z.string(),
    monthId: z.string(),
    actualMonthId: z.string(),
    year: z.string(),
    enrollment: z.string(),
    numberOfSites: z.string(),
    numberOfDistricts: z.string(),
    mealsServed: z.string(),
    freeAndReducedPercent: z.string(),
    isActive: z.string(),
});
/*
[class, SaveMonthlyNumberModel],[interface, ISaveMonthlyNumberModel],[schema, ZSaveMonthlyNumberModel],[definition, {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "schoolDistrictId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "monthId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "actualMonthId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "year": {
            "type": "string",
            "nullable": true
          },
          "enrollment": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "numberOfSites": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "numberOfDistricts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "mealsServed": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "freeAndReducedPercent": {
            "type": "integer",
            "format": "int32",
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
