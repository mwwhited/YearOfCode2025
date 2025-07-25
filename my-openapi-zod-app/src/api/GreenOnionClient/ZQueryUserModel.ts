//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryUserModel } from "./IQueryUserModel";


export const ZQueryUserModel: z.ZodType<IQueryUserModel> = z.object({
    userId: z.string(),
    isActive: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    objectId: z.string(),
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
    state: z.string(),
    roleId: z.string(),
    roleName: z.string(),
    schoolDistrictId: z.string(),
    schoolDistrictName: z.string(),
    manufacturerId: z.string(),
    manufacturerName: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryUserModel],[interface, IQueryUserModel],[schema, ZQueryUserModel],[definition, {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "isActive": {
            "type": "boolean"
          },
          "firstName": {
            "type": "string",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "nullable": true
          },
          "objectId": {
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
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryStateModel"
          },
          "state": {
            "type": "string",
            "nullable": true
          },
          "roleId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryRoleModel"
          },
          "roleName": {
            "type": "string",
            "nullable": true
          },
          "schoolDistrictId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QuerySchoolDistrictModel"
          },
          "schoolDistrictName": {
            "type": "string",
            "nullable": true
          },
          "manufacturerId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QueryManufacturerModel"
          },
          "manufacturerName": {
            "type": "string",
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
