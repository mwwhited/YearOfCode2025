//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { ISelectProductSaveCheckListRequestModel } from "./ISelectProductSaveCheckListRequestModel";

import type { IProductCheck } from "./IProductCheck";
import { ZProductCheck } from "./ZProductCheck";

export const ZSelectProductSaveCheckListRequestModel: z.ZodType<ISelectProductSaveCheckListRequestModel> = z.object({
    uniqueExcelFileId: z.string(),
    userOrDistrictId: z.string(),
    option: z.string(),
    productCheckList: z.string(),
});
/*
[class, SelectProductSaveCheckListRequestModel],[interface, ISelectProductSaveCheckListRequestModel],[schema, ZSelectProductSaveCheckListRequestModel],[definition, {
        "type": "object",
        "properties": {
          "uniqueExcelFileId": {
            "type": "string",
            "format": "uuid"
          },
          "userOrDistrictId": {
            "type": "integer",
            "format": "int32"
          },
          "option": {
            "type": "string",
            "nullable": true
          },
          "productCheckList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GreenOnion.Common.GreenOnionModel.RequestModel.Product.ProductCheck"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
