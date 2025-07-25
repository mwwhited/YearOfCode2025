//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserActionLogModel } from "./ZQueryUserActionLogModel";

type integer = number;

export interface IQueryUserActionLogModel {
    $schema: typeof ZQueryUserActionLogModel;

    userActionLogId?: integer | undefined; 
    eventType?: string | undefined; 
    httpMethod?: string | undefined; 
    eventDate?: string | undefined; 
    sessionId?: string | undefined; 
    requestId?: string | undefined; 
    correlationId?: string | undefined; 
    requestPath?: string | undefined; 
    userId?: integer | undefined; 
    user?: string | undefined; 

    toJSON(data?: any) : any;
}
