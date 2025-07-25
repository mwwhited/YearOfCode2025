//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IMappingFieldData } from "./IMappingFieldData";


export const ZMappingFieldData: z.ZodType<IMappingFieldData> = z.object({
    mappingID: z.string(),
    isChecked: z.string(),
    fileFieldName: z.string(),
    tableFieldID: z.string(),
    tableFieldName: z.string(),
});
/*
[class, MappingFieldData],[interface, IMappingFieldData],[schema, ZMappingFieldData],[definition, {
        "type": "object",
        "properties": {
          "mappingID": {
            "type": "integer",
            "format": "int32"
          },
          "isChecked": {
            "type": "boolean"
          },
          "fileFieldName": {
            "type": "string",
            "nullable": true
          },
          "tableFieldID": {
            "type": "string",
            "nullable": true
          },
          "tableFieldName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
