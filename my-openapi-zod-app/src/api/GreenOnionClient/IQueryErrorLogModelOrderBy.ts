//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryErrorLogModelOrderBy } from "./ZQueryErrorLogModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryErrorLogModelOrderBy {
    $schema: typeof ZQueryErrorLogModelOrderBy;

    errorLogId?: any | undefined; 
    errorMessage?: any | undefined; 
    errorPath?: any | undefined; 

    toJSON(data?: any) : any;
}
