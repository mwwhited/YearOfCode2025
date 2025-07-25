//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserActionLogModelOrderBy } from "./ZQueryUserActionLogModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryUserActionLogModelOrderBy {
    $schema: typeof ZQueryUserActionLogModelOrderBy;

    userActionLogId?: IOrderDirections | undefined;
    eventType?: IOrderDirections | undefined;
    httpMethod?: IOrderDirections | undefined;
    eventDate?: IOrderDirections | undefined;
    sessionId?: IOrderDirections | undefined;
    requestId?: IOrderDirections | undefined;
    correlationId?: IOrderDirections | undefined;
    requestPath?: IOrderDirections | undefined;
    userId?: IOrderDirections | undefined;
    user?: IOrderDirections | undefined;

    toJSON(data?: any) : any;
}
