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
import ZFilterParameter from "./ZFilterParameter";

const ZQueryUserActionLogModelFilter = z.object({
    userActionLogId: ZFilterParameter.optional(),
    eventType: ZFilterParameter.optional(),
    httpMethod: ZFilterParameter.optional(),
    eventDate: ZFilterParameter.optional(),
    sessionId: ZFilterParameter.optional(),
    requestId: ZFilterParameter.optional(),
    correlationId: ZFilterParameter.optional(),
    requestPath: ZFilterParameter.optional(),
    userId: ZFilterParameter.optional(),
    user: ZFilterParameter.optional(),
});

export default ZQueryUserActionLogModelFilter;