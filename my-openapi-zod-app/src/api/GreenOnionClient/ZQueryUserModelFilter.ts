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

import type { IQueryUserModelFilter } from "./IQueryUserModelFilter";


export const ZQueryUserModelFilter: z.ZodType<IQueryUserModelFilter> = z.object({
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
[class, QueryUserModelFilter],[interface, IQueryUserModelFilter],[schema, ZQueryUserModelFilter],[definition, {
        "type": "object",
        "properties": {
          "userId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isActive": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "firstName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "lastName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "objectId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "email": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "mobile": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "profileImage": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "coverImage": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "addressLine1": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "addressLine2": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "city": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "country": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "zipCode": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "stateId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "state": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "roleId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "roleName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "schoolDistrictId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "schoolDistrictName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "manufacturerId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "manufacturerName": {
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
        "description": "**Filterable Properties:** UserId; IsActive; FirstName; LastName; ObjectId; Email; Mobile; ProfileImage; CoverImage; AddressLine1; AddressLine2; City; Country; ZipCode; StateId; State; RoleId; RoleName; SchoolDistrictId; SchoolDistrictName; ManufacturerId; ManufacturerName; CreatedOn; CreatedById; CreatedBy; UpdatedOn; UpdatedById; UpdatedBy",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryUserModel"
      }]
*/
