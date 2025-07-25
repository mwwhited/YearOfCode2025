//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

import type { IQuerySchoolDistrictModelOrderBy } from "./IQuerySchoolDistrictModelOrderBy";


export const ZQuerySchoolDistrictModelOrderBy: z.ZodType<IQuerySchoolDistrictModelOrderBy> = z.object({
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
[class, QuerySchoolDistrictModelOrderBy],[interface, IQuerySchoolDistrictModelOrderBy],[schema, ZQuerySchoolDistrictModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "schoolDistrictId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "siteCode": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "districtName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "phoneNumber": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "email": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "country": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "stateId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "state": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "city": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "districtLogo": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isActive": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "foodServiceOptions": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "contractCompany": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isSchoolCoopMember": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isSchoolCoop": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "schoolCoopId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "schoolCoopName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "createdOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "createdById": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "createdBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "updatedOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "updatedById": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "updatedBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** SchoolDistrictId; SiteCode; DistrictName; PhoneNumber; Email; Country; StateId; State; City; DistrictLogo; IsActive; FoodServiceOptions; ContractCompany; IsSchoolCoopMember; IsSchoolCoop; SchoolCoopId; SchoolCoopName; CreatedOn; CreatedById; CreatedBy; UpdatedOn; UpdatedById; UpdatedBy",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QuerySchoolDistrictModel"
      }]
*/
