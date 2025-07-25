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
import { ZRoleMst } from "./ZRoleMst";

import type { IUserResponseModel } from "./IUserResponseModel";


export const ZUserResponseModel: z.ZodType<IUserResponseModel> = z.object({
    success: z.string(),
    message: z.string(),
    totalRecords: z.string(),
    payload: z.string(),
    isUpdate: z.string(),
    isAdded: z.string(),
    isDelete: z.string(),
    roleList: z.string(),
    isEmailExists: z.string(),
});
/*
[class, UserResponseModel],[interface, IUserResponseModel],[schema, ZUserResponseModel],[definition, {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "nullable": true
          },
          "message": {
            "type": "string",
            "nullable": true
          },
          "totalRecords": {
            "type": "integer",
            "format": "int32"
          },
          "payload": {
            "nullable": true
          },
          "isUpdate": {
            "type": "boolean"
          },
          "isAdded": {
            "type": "boolean"
          },
          "isDelete": {
            "type": "boolean"
          },
          "roleList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Entities.Models.RoleMst"
            },
            "nullable": true
          },
          "isEmailExists": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }]
*/
