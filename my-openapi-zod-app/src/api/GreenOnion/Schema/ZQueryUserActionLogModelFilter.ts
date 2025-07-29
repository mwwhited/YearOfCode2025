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
    userActionLogId: ZFilterParameter.nullish(),
    eventType: ZFilterParameter.nullish(),
    httpMethod: ZFilterParameter.nullish(),
    eventDate: ZFilterParameter.nullish(),
    sessionId: ZFilterParameter.nullish(),
    requestId: ZFilterParameter.nullish(),
    correlationId: ZFilterParameter.nullish(),
    requestPath: ZFilterParameter.nullish(),
    userId: ZFilterParameter.nullish(),
    user: ZFilterParameter.nullish(),
});

export default ZQueryUserActionLogModelFilter;