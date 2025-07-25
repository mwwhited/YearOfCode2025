//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZQueryUserActionLogModel = z.object({
    userActionLogId:z.number().int().optional(),
    eventType:z.string().optional(),
    httpMethod:z.string().optional(),
    eventDate:z.string().optional(),
    sessionId:z.string().optional(),
    requestId:z.string().optional(),
    correlationId:z.string().optional(),
    requestPath:z.string().optional(),
    userId:z.number().int().optional(),
    user:z.string().optional(),
});

