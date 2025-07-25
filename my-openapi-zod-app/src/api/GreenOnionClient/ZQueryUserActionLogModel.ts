//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryUserActionLogModel } from "./IQueryUserActionLogModel";


export const ZQueryUserActionLogModel: z.ZodType<IQueryUserActionLogModel> = z.object({
    userActionLogId: z.string(),
    eventType: z.string(),
    httpMethod: z.string(),
    eventDate: z.string(),
    sessionId: z.string(),
    requestId: z.string(),
    correlationId: z.string(),
    requestPath: z.string(),
    userId: z.string(),
    user: z.string(),
});
/*
[class, QueryUserActionLogModel],[interface, IQueryUserActionLogModel],[schema, ZQueryUserActionLogModel],[definition, {
        "type": "object",
        "properties": {
          "userActionLogId": {
            "type": "integer",
            "format": "int64",
            "x-navigation-key": true
          },
          "eventType": {
            "type": "string",
            "nullable": true
          },
          "httpMethod": {
            "type": "string",
            "nullable": true
          },
          "eventDate": {
            "type": "string",
            "format": "date-time"
          },
          "sessionId": {
            "type": "string",
            "nullable": true
          },
          "requestId": {
            "type": "string",
            "nullable": true
          },
          "correlationId": {
            "type": "string",
            "nullable": true
          },
          "requestPath": {
            "type": "string",
            "nullable": true
          },
          "userId": {
            "type": "integer",
            "format": "int32"
          },
          "user": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }]
*/
