//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IProductActivityReportFilter } from "./IProductActivityReportFilter";


export const ZProductActivityReportFilter: z.ZodType<IProductActivityReportFilter> = z.object({
    pageNumber: z.string(),
    pageSize: z.string(),
    schoolDistrictId: z.string(),
    iocCategoryId: z.string(),
    userId: z.string(),
    productId: z.string(),
    gtin: z.string(),
    upc: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    productGtinId: z.string(),
    productUpcId: z.string(),
    cooperative: z.string(),
    manufactureId: z.string(),
});
/*
[class, ProductActivityReportFilter],[interface, IProductActivityReportFilter],[schema, ZProductActivityReportFilter],[definition, {
        "type": "object",
        "properties": {
          "pageNumber": {
            "type": "integer",
            "format": "int32"
          },
          "pageSize": {
            "type": "integer",
            "format": "int32"
          },
          "schoolDistrictId": {
            "type": "integer",
            "format": "int32"
          },
          "iocCategoryId": {
            "type": "integer",
            "format": "int32"
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "gtin": {
            "type": "string",
            "nullable": true
          },
          "upc": {
            "type": "string",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "productGtinId": {
            "type": "integer",
            "format": "int32"
          },
          "productUpcId": {
            "type": "integer",
            "format": "int32"
          },
          "cooperative": {
            "type": "string",
            "nullable": true
          },
          "manufactureId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
