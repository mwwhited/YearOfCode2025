//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserActionLogModelFilter } from "./ZQueryUserActionLogModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryUserActionLogModelFilter {
    $schema: typeof ZQueryUserActionLogModelFilter;

    userActionLogId?: any | undefined; 
    eventType?: any | undefined; 
    httpMethod?: any | undefined; 
    eventDate?: any | undefined; 
    sessionId?: any | undefined; 
    requestId?: any | undefined; 
    correlationId?: any | undefined; 
    requestPath?: any | undefined; 
    userId?: any | undefined; 
    user?: any | undefined; 

    toJSON(data?: any) : any;
}
