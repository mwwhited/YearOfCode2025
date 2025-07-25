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

import type { IQueryStorageTypeModelFilter } from "./IQueryStorageTypeModelFilter";


export const ZQueryStorageTypeModelFilter: z.ZodType<IQueryStorageTypeModelFilter> = z.object({
    storageTypeId: z.string(),
    storageTypeName: z.string(),
});
/*
[class, QueryStorageTypeModelFilter],[interface, IQueryStorageTypeModelFilter],[schema, ZQueryStorageTypeModelFilter],[definition, {
        "type": "object",
        "properties": {
          "storageTypeId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "storageTypeName": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** StorageTypeId; StorageTypeName",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryStorageTypeModel"
      }]
*/
