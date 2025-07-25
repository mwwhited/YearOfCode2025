//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryManufacturerModel } from "./IQueryManufacturerModel";


export const ZQueryManufacturerModel: z.ZodType<IQueryManufacturerModel> = z.object({
    manufacturerId: z.string(),
    manufacturerName: z.string(),
    glnNumber: z.string(),
    isActive: z.string(),
    hasUsers: z.string(),
    userCount: z.string(),
    hasActiveUsers: z.string(),
    activeUserCount: z.string(),
    productCount: z.string(),
    hasOneWorldSync: z.string(),
    oneWorldSyncCount: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryManufacturerModel],[interface, IQueryManufacturerModel],[schema, ZQueryManufacturerModel],[definition, {
        "type": "object",
        "properties": {
          "manufacturerId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
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
          },
          "hasUsers": {
            "type": "boolean"
          },
          "userCount": {
            "type": "integer",
            "format": "int32"
          },
          "hasActiveUsers": {
            "type": "boolean"
          },
          "activeUserCount": {
            "type": "integer",
            "format": "int32"
          },
          "productCount": {
            "type": "integer",
            "format": "int32"
          },
          "hasOneWorldSync": {
            "type": "boolean"
          },
          "oneWorldSyncCount": {
            "type": "integer",
            "format": "int32"
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
