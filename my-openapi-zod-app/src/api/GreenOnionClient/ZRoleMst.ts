//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IRoleMst } from "./IRoleMst";


export const ZRoleMst: z.ZodType<IRoleMst> = z.object({
    roleId: z.string(),
    roleName: z.string(),
    parentRoleId: z.string(),
    isActive: z.string(),
    createdOn: z.string(),
    createdByUserId: z.string(),
    updatedOn: z.string(),
    updatedByUserId: z.string(),
});
/*
[class, RoleMst],[interface, IRoleMst],[schema, ZRoleMst],[definition, {
        "type": "object",
        "properties": {
          "roleId": {
            "type": "integer",
            "format": "int32"
          },
          "roleName": {
            "maxLength": 50,
            "minLength": 0,
            "type": "string",
            "nullable": true
          },
          "parentRoleId": {
            "type": "integer",
            "format": "int32",
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
          "createdByUserId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "updatedOn": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "updatedByUserId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
