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

import type { IQueryUserModelOrderBy } from "./IQueryUserModelOrderBy";


export const ZQueryUserModelOrderBy: z.ZodType<IQueryUserModelOrderBy> = z.object({
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
[class, QueryUserModelOrderBy],[interface, IQueryUserModelOrderBy],[schema, ZQueryUserModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "userId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isActive": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "firstName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "lastName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "objectId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "email": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "mobile": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "profileImage": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "coverImage": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "addressLine1": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "addressLine2": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "city": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "country": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "zipCode": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "stateId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "state": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "roleId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "roleName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "schoolDistrictId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "schoolDistrictName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "manufacturerId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "manufacturerName": {
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
        "description": "**Filterable Properties:** UserId; IsActive; FirstName; LastName; ObjectId; Email; Mobile; ProfileImage; CoverImage; AddressLine1; AddressLine2; City; Country; ZipCode; StateId; State; RoleId; RoleName; SchoolDistrictId; SchoolDistrictName; ManufacturerId; ManufacturerName; CreatedOn; CreatedById; CreatedBy; UpdatedOn; UpdatedById; UpdatedBy",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryUserModel"
      }]
*/
