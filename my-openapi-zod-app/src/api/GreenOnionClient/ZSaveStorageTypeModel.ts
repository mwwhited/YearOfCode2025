//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveStorageTypeModel } from "./ISaveStorageTypeModel";


export const ZSaveStorageTypeModel: z.ZodType<ISaveStorageTypeModel> = z.object({
    storageTypeId: z.string(),
    storageTypeName: z.string(),
});
/*
[class, SaveStorageTypeModel],[interface, ISaveStorageTypeModel],[schema, ZSaveStorageTypeModel],[definition, {
        "type": "object",
        "properties": {
          "storageTypeId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "storageTypeName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
