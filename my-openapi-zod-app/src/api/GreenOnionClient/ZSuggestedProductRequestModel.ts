//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISuggestedProductRequestModel } from "./ISuggestedProductRequestModel";


export const ZSuggestedProductRequestModel: z.ZodType<ISuggestedProductRequestModel> = z.object({
    suggestionId: z.string(),
    productId: z.string(),
    suggestedProductId: z.string(),
    suggestionDate: z.string(),
    suggestedByUserId: z.string(),
    isActive: z.string(),
    suggestedByDistrictId: z.string(),
});
/*
[class, SuggestedProductRequestModel],[interface, ISuggestedProductRequestModel],[schema, ZSuggestedProductRequestModel],[definition, {
        "type": "object",
        "properties": {
          "suggestionId": {
            "type": "integer",
            "format": "int32"
          },
          "productId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "suggestedProductId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "suggestionDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "suggestedByUserId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "isActive": {
            "type": "boolean",
            "nullable": true
          },
          "suggestedByDistrictId": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
