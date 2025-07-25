//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryErrorLogModel } from "./ZQueryErrorLogModel";

type integer = number;

export interface IQueryErrorLogModel {
    $schema: typeof ZQueryErrorLogModel;

    errorLogId?: integer | undefined; 
    errorMessage?: string | undefined; 
    errorPath?: string | undefined; 

    toJSON(data?: any) : any;
}
