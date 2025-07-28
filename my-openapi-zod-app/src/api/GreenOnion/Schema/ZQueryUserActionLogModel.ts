//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZQueryUserActionLogModel = z.object({
    userActionLogId: z.number().int().optional(),
    eventType: z.string().optional(),
    httpMethod: z.string().optional(),
    eventDate: z.string().optional(),
    sessionId: z.string().optional(),
    requestId: z.string().optional(),
    correlationId: z.string().optional(),
    requestPath: z.string().optional(),
    userId: z.number().int().optional(),
    user: z.string().optional(),
});

export default ZQueryUserActionLogModel;