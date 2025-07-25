//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISaveSchoolDistrictModel } from "./ISaveSchoolDistrictModel";


export const ZSaveSchoolDistrictModel: z.ZodType<ISaveSchoolDistrictModel> = z.object({
    schoolDistrictId: z.string(),
    siteCode: z.string(),
    districtName: z.string(),
    phoneNumber: z.string(),
    email: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    districtLogo: z.string(),
    isActive: z.string(),
    foodServiceOptions: z.string(),
    contractCompany: z.string(),
    isSchoolCoop: z.string(),
    schoolCoopId: z.string(),
});
/*
[class, SaveSchoolDistrictModel],[interface, ISaveSchoolDistrictModel],[schema, ZSaveSchoolDistrictModel],[definition, {
        "type": "object",
        "properties": {
          "schoolDistrictId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
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
          "state": {
            "type": "integer",
            "format": "int32",
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
          "isSchoolCoop": {
            "type": "boolean",
            "nullable": true
          },
          "schoolCoopId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
