//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryMonthlyNumberModel } from "./IQueryMonthlyNumberModel";


export const ZQueryMonthlyNumberModel: z.ZodType<IQueryMonthlyNumberModel> = z.object({
    id: z.string(),
    schoolDistrictId: z.string(),
    monthId: z.string(),
    actualMonthId: z.string(),
    year: z.string(),
    enrollment: z.string(),
    numberOfSites: z.string(),
    numberOfDistricts: z.string(),
    mealsServed: z.string(),
    freeAndReducedPercent: z.string(),
    isActive: z.string(),
    regDate: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryMonthlyNumberModel],[interface, IQueryMonthlyNumberModel],[schema, ZQueryMonthlyNumberModel],[definition, {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-key": true
          },
          "schoolDistrictId": {
            "type": "integer",
            "format": "int32",
            "nullable": true,
            "x-navigation-target": "GreenOnion.Common.Models.QuerySchoolDistrictModel"
          },
          "monthId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "actualMonthId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "year": {
            "type": "string",
            "nullable": true
          },
          "enrollment": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "numberOfSites": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "numberOfDistricts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "mealsServed": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "freeAndReducedPercent": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
          },
          "regDate": {
            "type": "string",
            "format": "date-time",
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
