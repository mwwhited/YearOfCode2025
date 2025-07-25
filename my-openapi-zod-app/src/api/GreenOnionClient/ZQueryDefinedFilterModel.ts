//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryDefinedFilterModel } from "./IQueryDefinedFilterModel";


export const ZQueryDefinedFilterModel: z.ZodType<IQueryDefinedFilterModel> = z.object({
    definedFilterId: z.string(),
    createById: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
    createBy: z.string(),
    path: z.string(),
    name: z.string(),
    isActive: z.string(),
    createdOn: z.string(),
    state: z.string(),
});
/*
[class, QueryDefinedFilterModel],[interface, IQueryDefinedFilterModel],[schema, ZQueryDefinedFilterModel],[definition, {
        "type": "object",
        "properties": {
          "definedFilterId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "createById": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "updatedOn": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "updatedById": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "updatedBy": {
            "type": "string",
            "nullable": true
          },
          "createBy": {
            "type": "string",
            "nullable": true
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
          "createdOn": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "state": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
