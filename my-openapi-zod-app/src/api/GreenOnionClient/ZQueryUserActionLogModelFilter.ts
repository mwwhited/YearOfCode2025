//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IQueryUserActionLogModelFilter } from "./IQueryUserActionLogModelFilter";

import type { IFilterParameter } from "./IFilterParameter";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryUserActionLogModelFilter: z.ZodType<IQueryUserActionLogModelFilter> = z.object({
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
[class, QueryUserActionLogModelFilter],[interface, IQueryUserActionLogModelFilter],[schema, ZQueryUserActionLogModelFilter],[definition, {
        "type": "object",
        "properties": {
          "userActionLogId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "eventType": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "httpMethod": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "eventDate": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "sessionId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "requestId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "correlationId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "requestPath": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "userId": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          },
          "user": {
            "$ref": "#/components/schemas/Eliassen.System.Linq.Search.FilterParameter"
          }
        },
        "description": "**Filterable Properties:** UserActionLogId; EventType; HttpMethod; EventDate; SessionId; RequestId; CorrelationId; RequestPath; UserId; User",
        "nullable": true,
        "x-query-set": "GreenOnion.Common.Models.QueryUserActionLogModel"
      }]
*/
