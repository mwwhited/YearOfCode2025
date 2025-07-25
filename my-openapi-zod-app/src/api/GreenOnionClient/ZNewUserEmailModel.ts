//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { INewUserEmailModel } from "./INewUserEmailModel";


export const ZNewUserEmailModel: z.ZodType<INewUserEmailModel> = z.object({
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
    email: z.string(),
    association: z.string(),
});
/*
[class, NewUserEmailModel],[interface, INewUserEmailModel],[schema, ZNewUserEmailModel],[definition, {
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "nullable": true
          },
          "role": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "nullable": true
          },
          "association": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
