//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";

const ZQueryUserActionLogModel = z.object({
    userActionLogId: z.number().int().nullish(),
    eventType: z.string().nullish(),
    httpMethod: z.string().nullish(),
    eventDate: z.string().nullish(),
    sessionId: z.string().nullish(),
    requestId: z.string().nullish(),
    correlationId: z.string().nullish(),
    requestPath: z.string().nullish(),
    userId: z.number().int().nullish(),
    user: z.string().nullish(),
});

export default ZQueryUserActionLogModel;