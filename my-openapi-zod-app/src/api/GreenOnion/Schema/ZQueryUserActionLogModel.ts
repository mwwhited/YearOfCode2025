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
    userActionLogId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    eventType: z.string().meta({}).nullish(),  
    httpMethod: z.string().meta({}).nullish(),  
    eventDate: z.string().meta({}).nullish(),  
    sessionId: z.string().meta({}).nullish(),  
    requestId: z.string().meta({}).nullish(),  
    correlationId: z.string().meta({}).nullish(),  
    requestPath: z.string().meta({}).nullish(),  
    userId: z.number().int().meta({}).nullish(),  
    user: z.string().meta({}).nullish(),  
});

export default ZQueryUserActionLogModel;