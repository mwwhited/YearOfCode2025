//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IApproveSuggestProductRequestModel } from "./IApproveSuggestProductRequestModel";


export const ZApproveSuggestProductRequestModel: z.ZodType<IApproveSuggestProductRequestModel> = z.object({
    productId: z.string(),
    suggestedProductId: z.string(),
});
/*
[class, ApproveSuggestProductRequestModel],[interface, IApproveSuggestProductRequestModel],[schema, ZApproveSuggestProductRequestModel],[definition, {
        "type": "object",
        "properties": {
          "productId": {
            "type": "integer",
            "format": "int32"
          },
          "suggestedProductId": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      }]
*/
