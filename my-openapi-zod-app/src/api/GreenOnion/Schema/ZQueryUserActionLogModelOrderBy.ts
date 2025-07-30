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
import ZOrderDirections from "./ZOrderDirections";

const ZQueryUserActionLogModelOrderBy = z.object({
    userActionLogId: ZOrderDirections.nullish(),  
    eventType: ZOrderDirections.nullish(),  
    httpMethod: ZOrderDirections.nullish(),  
    eventDate: ZOrderDirections.nullish(),  
    sessionId: ZOrderDirections.nullish(),  
    requestId: ZOrderDirections.nullish(),  
    correlationId: ZOrderDirections.nullish(),  
    requestPath: ZOrderDirections.nullish(),  
    userId: ZOrderDirections.nullish(),  
    user: ZOrderDirections.nullish(),  
});

export default ZQueryUserActionLogModelOrderBy;