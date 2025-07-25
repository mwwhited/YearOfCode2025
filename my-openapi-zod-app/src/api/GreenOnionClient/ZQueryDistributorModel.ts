//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryDistributorModel } from "./IQueryDistributorModel";


export const ZQueryDistributorModel: z.ZodType<IQueryDistributorModel> = z.object({
    distributorId: z.string(),
    distributorName: z.string(),
    distributorCode: z.string(),
    isActive: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryDistributorModel],[interface, IQueryDistributorModel],[schema, ZQueryDistributorModel],[definition, {
        "type": "object",
        "properties": {
          "distributorId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
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
          },
          "createdOn": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "createdById": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryUserModel"
          },
          "createdBy": {
            "type": "string",
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
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryUserModel"
          },
          "updatedBy": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
