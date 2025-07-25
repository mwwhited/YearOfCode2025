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

import type { IQueryDefinedFilterModelOrderBy } from "./IQueryDefinedFilterModelOrderBy";


export const ZQueryDefinedFilterModelOrderBy: z.ZodType<IQueryDefinedFilterModelOrderBy> = z.object({
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
[class, QueryDefinedFilterModelOrderBy],[interface, IQueryDefinedFilterModelOrderBy],[schema, ZQueryDefinedFilterModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "definedFilterId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "createById": {
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
          },
          "createBy": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "path": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "name": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "isActive": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "createdOn": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "state": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** DefinedFilterId; CreateById; UpdatedOn; UpdatedById; UpdatedBy; CreateBy; Path; Name; IsActive; CreatedOn; State",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryDefinedFilterModel"
      }]
*/
