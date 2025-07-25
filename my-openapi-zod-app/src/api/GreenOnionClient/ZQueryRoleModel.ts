//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryRoleModel } from "./IQueryRoleModel";


export const ZQueryRoleModel: z.ZodType<IQueryRoleModel> = z.object({
    roleId: z.string(),
    roleName: z.string(),
    isActive: z.string(),
    userCount: z.string(),
    activeUserCount: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryRoleModel],[interface, IQueryRoleModel],[schema, ZQueryRoleModel],[definition, {
        "type": "object",
        "properties": {
          "roleId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "roleName": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean"
          },
          "userCount": {
            "type": "integer",
            "format": "int32"
          },
          "activeUserCount": {
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
