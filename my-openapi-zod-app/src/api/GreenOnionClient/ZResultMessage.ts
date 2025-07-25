//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import type { IMessageLevels } from "./IMessageLevels";
import { ZMessageLevels } from "./ZMessageLevels";

import type { IResultMessage } from "./IResultMessage";


export const ZResultMessage: z.ZodType<IResultMessage> = z.object({
    level: z.string(),
    message: z.string(),
    messageCode: z.string(),
    context: z.string(),
    metaData: z.string(),
});
/*
[class, ResultMessage],[interface, IResultMessage],[schema, ZResultMessage],[definition, {
        "required": [
          "message"
        ],
        "type": "object",
        "properties": {
          "level": {
            "$ref": "#/components/schemas/Eliassen.System.ResponseModel.MessageLevels"
          },
          "message": {
            "type": "string",
            "description": "Simple English message about issue.",
            "nullable": true
          },
          "messageCode": {
            "type": "string",
            "description": "unique code that may be used to assist in translating issue",
            "nullable": true
          },
          "context": {
            "type": "string",
            "description": "Property or path related to this message",
            "nullable": true
          },
          "metaData": {
            "description": "additional properties related to response",
            "nullable": true
          }
        },
        "additionalProperties": false,
        "description": "additional details about response"
      }]
*/
