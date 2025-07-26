//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryUserActionLogModelFilter = z.object({
    userActionLogId:ZFilterParameter.optional(),
    eventType:ZFilterParameter.optional(),
    httpMethod:ZFilterParameter.optional(),
    eventDate:ZFilterParameter.optional(),
    sessionId:ZFilterParameter.optional(),
    requestId:ZFilterParameter.optional(),
    correlationId:ZFilterParameter.optional(),
    requestPath:ZFilterParameter.optional(),
    userId:ZFilterParameter.optional(),
    user:ZFilterParameter.optional(),
});
