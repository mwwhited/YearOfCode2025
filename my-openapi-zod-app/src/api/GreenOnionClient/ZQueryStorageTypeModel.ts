//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryStorageTypeModel } from "./IQueryStorageTypeModel";


export const ZQueryStorageTypeModel: z.ZodType<IQueryStorageTypeModel> = z.object({
    storageTypeId: z.string(),
    storageTypeName: z.string(),
});
/*
[class, QueryStorageTypeModel],[interface, IQueryStorageTypeModel],[schema, ZQueryStorageTypeModel],[definition, {
        "type": "object",
        "properties": {
          "storageTypeId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "storageTypeName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
