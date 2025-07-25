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


export const ZFilterParameter: z.ZodType<IFilterParameter> = z.object({
    eq: z.string(),
    neq: z.string(),
    in: z.string(),
    gt: z.string(),
    gte: z.string(),
    lt: z.string(),
    lte: z.string(),
});
/*
[class, FilterParameter],[interface, IFilterParameter],[schema, ZFilterParameter],[definition, {
        "type": "object",
        "properties": {
          "eq": {
            "description": "`Equal To`: pass in the value to match for a given property  \r\n\r\nIf you are using string values you may also use wild cards  \r\n\\*bc -> Ends with  \r\n\\*b\\* -> Contains  \r\nab\\* -> Starts with",
            "nullable": true
          },
          "neq": {
            "description": "`Not Equal To`: pass in the value to match for a given property  \r\n\r\nIf you are using string values you may also use wild cards  \r\n\\*bc -> Ends with  \r\n\\*b\\* -> Contains  \r\nab\\* -> Starts with",
            "nullable": true
          },
          "in": {
            "type": "array",
            "items": { },
            "description": "This allows for providing a set of values where the value from the queries data must match at least \r\none of provided values",
            "nullable": true
          },
          "gt": {
            "description": "`Greater than`",
            "nullable": true
          },
          "gte": {
            "description": "`Greater than or equal to`",
            "nullable": true
          },
          "lt": {
            "description": "`Less than`",
            "nullable": true
          },
          "lte": {
            "description": "`Less than or equal to`",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "Filter parameter"
      }]
*/
