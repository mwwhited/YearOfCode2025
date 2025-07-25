//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryUserActionLogModelOrderBy = z.object({
    userActionLogId:ZOrderDirections.optional(),
    eventType:ZOrderDirections.optional(),
    httpMethod:ZOrderDirections.optional(),
    eventDate:ZOrderDirections.optional(),
    sessionId:ZOrderDirections.optional(),
    requestId:ZOrderDirections.optional(),
    correlationId:ZOrderDirections.optional(),
    requestPath:ZOrderDirections.optional(),
    userId:ZOrderDirections.optional(),
    user:ZOrderDirections.optional(),
});

