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

    userActionLogId?: IFilterParameter | undefined;
    eventType?: IFilterParameter | undefined;
    httpMethod?: IFilterParameter | undefined;
    eventDate?: IFilterParameter | undefined;
    sessionId?: IFilterParameter | undefined;
    requestId?: IFilterParameter | undefined;
    correlationId?: IFilterParameter | undefined;
    requestPath?: IFilterParameter | undefined;
    userId?: IFilterParameter | undefined;
    user?: IFilterParameter | undefined;

    toJSON(data?: any) : any;
}
