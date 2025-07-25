//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryUserActionLogModelOrderBy } from "./IQueryUserActionLogModelOrderBy";

import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryUserActionLogModelOrderBy: z.ZodType<IQueryUserActionLogModelOrderBy> = z.object({
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
[class, QueryUserActionLogModelOrderBy],[interface, IQueryUserActionLogModelOrderBy],[schema, ZQueryUserActionLogModelOrderBy],[definition, {
        "type": "object",
        "properties": {
          "userActionLogId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "eventType": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "httpMethod": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "eventDate": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "sessionId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "requestId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "correlationId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "requestPath": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "userId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          },
          "user": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.OrderDirections"
          }
        },
        "description": "**Filterable Properties:** UserActionLogId; EventType; HttpMethod; EventDate; SessionId; RequestId; CorrelationId; RequestPath; UserId; User",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryUserActionLogModel"
      }]
*/
