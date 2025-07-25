//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryManufacturerModelPagedQueryResult } from "./IQueryManufacturerModelPagedQueryResult";

import type { IQueryManufacturerModel } from "./IQueryManufacturerModel";
import { ZQueryManufacturerModel } from "./ZQueryManufacturerModel";
import type { IResultMessage } from "./IResultMessage";
import { ZResultMessage } from "./ZResultMessage";

export const ZQueryManufacturerModelPagedQueryResult: z.ZodType<IQueryManufacturerModelPagedQueryResult> = z.object({
    rows: z.string(),
    messages: z.string(),
    currentPage: z.string(),
    totalPageCount: z.string(),
    totalRowCount: z.string(),
});
/*
[class, QueryManufacturerModelPagedQueryResult],[interface, IQueryManufacturerModelPagedQueryResult],[schema, ZQueryManufacturerModelPagedQueryResult],[definition, {
        "type": "object",
        "properties": {
          "rows": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Common.Models.QueryManufacturerModel"
            },
            "description": "Gets the collection of items in the result.",
            "nullable": true,
            "readOnly": true
          },
          "messages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Eliassen.System.ResponseModel.ResultMessage"
            },
            "description": "Gets or sets the collection of result messages associated with the query result.",
            "nullable": true
          },
          "currentPage": {
            "type": "integer",
            "description": "Gets the total number of pages.",
            "format": "int32",
            "readOnly": true
          },
          "totalPageCount": {
            "type": "integer",
            "description": "Gets the total number of pages.",
            "format": "int32",
            "readOnly": true
          },
          "totalRowCount": {
            "type": "integer",
            "description": "Gets the total number of rows.",
            "format": "int32",
            "readOnly": true
          }
        },
        "additionalProperties": false,
        "description": "Represents the result of a paged query, including information about the current page, total page count,\r\ntotal row count, and a collection of items."
      }]
*/
