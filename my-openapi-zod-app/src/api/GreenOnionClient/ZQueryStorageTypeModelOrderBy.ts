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

import type { IQueryStorageTypeModelOrderBy } from "./IQueryStorageTypeModelOrderBy";


export const ZQueryStorageTypeModelOrderBy: z.ZodType<IQueryStorageTypeModelOrderBy> = z.object({
    storageTypeId: z.string(),
    storageTypeName: z.string(),
});
/*
[class, QueryStorageTypeModelOrderBy],[interface, IQueryStorageTypeModelOrderBy],[schema, ZQueryStorageTypeModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "storageTypeId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "storageTypeName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** StorageTypeId; StorageTypeName",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryStorageTypeModel"
      }]
*/
