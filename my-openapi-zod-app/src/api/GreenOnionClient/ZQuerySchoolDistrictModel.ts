//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQuerySchoolDistrictModel } from "./IQuerySchoolDistrictModel";


export const ZQuerySchoolDistrictModel: z.ZodType<IQuerySchoolDistrictModel> = z.object({
    schoolDistrictId: z.string(),
    siteCode: z.string(),
    districtName: z.string(),
    phoneNumber: z.string(),
    email: z.string(),
    country: z.string(),
    stateId: z.string(),
    state: z.string(),
    city: z.string(),
    districtLogo: z.string(),
    isActive: z.string(),
    foodServiceOptions: z.string(),
    contractCompany: z.string(),
    isSchoolCoopMember: z.string(),
    isSchoolCoop: z.string(),
    schoolCoopId: z.string(),
    schoolCoopName: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QuerySchoolDistrictModel],[interface, IQuerySchoolDistrictModel],[schema, ZQuerySchoolDistrictModel],[definition, {
        "type": "object",
        "properties": {
          "schoolDistrictId": {
            "type": "integer",
            "format": "int32",
            "x-navigation-key": true
          },
          "siteCode": {
            "type": "string",
            "nullable": true
          },
          "districtName": {
            "type": "string",
            "nullable": true
          },
          "phoneNumber": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "nullable": true
          },
          "country": {
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
          "city": {
            "type": "string",
            "nullable": true
          },
          "districtLogo": {
            "type": "string",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
          },
          "foodServiceOptions": {
            "type": "string",
            "nullable": true
          },
          "contractCompany": {
            "type": "string",
            "nullable": true
          },
          "isSchoolCoopMember": {
            "type": "boolean"
          },
          "isSchoolCoop": {
            "type": "boolean"
          },
          "schoolCoopId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "schoolCoopName": {
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
            "nullable": true
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
            "nullable": true
          },
          "updatedBy": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
