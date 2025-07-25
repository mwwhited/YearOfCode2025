//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryDefinedFilterModelFilter } from "./IQueryDefinedFilterModelFilter";

import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryDefinedFilterModelFilter: z.ZodType<IQueryDefinedFilterModelFilter> = z.object({
    definedFilterId: z.string(),
    createById: z.string(),
    updatedOn: z.string(),
    updatedById: z.string(),
    updatedBy: z.string(),
    createBy: z.string(),
    path: z.string(),
    name: z.string(),
    isActive: z.string(),
    createdOn: z.string(),
    state: z.string(),
});
/*
[class, QueryDefinedFilterModelFilter],[interface, IQueryDefinedFilterModelFilter],[schema, ZQueryDefinedFilterModelFilter],[definition, {
        "type": "object",
        "properties": {
          "definedFilterId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "createById": {
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
          },
          "createBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "path": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "name": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "isActive": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "createdOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "state": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** DefinedFilterId; CreateById; UpdatedOn; UpdatedById; UpdatedBy; CreateBy; Path; Name; IsActive; CreatedOn; State",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryDefinedFilterModel"
      }]
*/
