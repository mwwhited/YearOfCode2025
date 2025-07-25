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

import type { IQueryDistributorModelFilter } from "./IQueryDistributorModelFilter";


export const ZQueryDistributorModelFilter: z.ZodType<IQueryDistributorModelFilter> = z.object({
    distributorId: z.string(),
    distributorName: z.string(),
    distributorCode: z.string(),
    isActive: z.string(),
    createdOn: z.string(),
    createdById: z.string(),
    createdBy: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
});
/*
[class, QueryDistributorModelFilter],[interface, IQueryDistributorModelFilter],[schema, ZQueryDistributorModelFilter],[definition, {
        "type": "object",
        "properties": {
          "distributorId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "distributorName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "distributorCode": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isActive": {
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
        "description": "**Filterable Properties:** DistributorId; DistributorName; DistributorCode; IsActive; CreatedOn; CreatedById; CreatedBy; UpdatedOn; UpdatedById; UpdatedBy",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryDistributorModel"
      }]
*/
