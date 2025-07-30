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
    userActionLogId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    eventType: z.string().nullish().meta({}),  
    httpMethod: z.string().nullish().meta({}),  
    eventDate: z.string().nullish().meta({}),  
    sessionId: z.string().nullish().meta({}),  
    requestId: z.string().nullish().meta({}),  
    correlationId: z.string().nullish().meta({}),  
    requestPath: z.string().nullish().meta({}),  
    userId: z.number().int().nullish().meta({}),  
    user: z.string().nullish().meta({}),  
});

export default ZQueryUserActionLogModel;