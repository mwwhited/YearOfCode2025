//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveUserModel } from "./ISaveUserModel";


export const ZSaveUserModel: z.ZodType<ISaveUserModel> = z.object({
    userId: z.string(),
    isActive: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    mobile: z.string(),
    profileImage: z.string(),
    coverImage: z.string(),
    addressLine1: z.string(),
    addressLine2: z.string(),
    city: z.string(),
    country: z.string(),
    zipCode: z.string(),
    stateId: z.string(),
    roleId: z.string(),
    schoolDistrictId: z.string(),
    manufacturerId: z.string(),
});
/*
[class, SaveUserModel],[interface, ISaveUserModel],[schema, ZSaveUserModel],[definition, {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
          },
          "firstName": {
            "type": "string",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "nullable": true
          },
          "mobile": {
            "type": "string",
            "nullable": true
          },
          "profileImage": {
            "type": "string",
            "nullable": true
          },
          "coverImage": {
            "type": "string",
            "nullable": true
          },
          "addressLine1": {
            "type": "string",
            "nullable": true
          },
          "addressLine2": {
            "type": "string",
            "nullable": true
          },
          "city": {
            "type": "string",
            "nullable": true
          },
          "country": {
            "type": "string",
            "nullable": true
          },
          "zipCode": {
            "type": "string",
            "nullable": true
          },
          "stateId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "roleId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "schoolDistrictId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "manufacturerId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
