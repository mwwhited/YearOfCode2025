//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

import type { IQuerySchoolDistrictModelFilter } from "./IQuerySchoolDistrictModelFilter";


export const ZQuerySchoolDistrictModelFilter: z.ZodType<IQuerySchoolDistrictModelFilter> = z.object({
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
[class, QuerySchoolDistrictModelFilter],[interface, IQuerySchoolDistrictModelFilter],[schema, ZQuerySchoolDistrictModelFilter],[definition, {
        "type": "object",
        "properties": {
          "schoolDistrictId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "siteCode": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "districtName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "phoneNumber": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "email": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "country": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "stateId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "state": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "city": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "districtLogo": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isActive": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "foodServiceOptions": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "contractCompany": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isSchoolCoopMember": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isSchoolCoop": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "schoolCoopId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "schoolCoopName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "createdOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "createdById": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "createdBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "updatedOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "updatedById": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "updatedBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** SchoolDistrictId; SiteCode; DistrictName; PhoneNumber; Email; Country; StateId; State; City; DistrictLogo; IsActive; FoodServiceOptions; ContractCompany; IsSchoolCoopMember; IsSchoolCoop; SchoolCoopId; SchoolCoopName; CreatedOn; CreatedById; CreatedBy; UpdatedOn; UpdatedById; UpdatedBy",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QuerySchoolDistrictModel"
      }]
*/
