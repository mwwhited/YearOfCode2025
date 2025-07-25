//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryErrorLogModelFilter } from "./ZQueryErrorLogModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryErrorLogModelFilter {
    $schema: typeof ZQueryErrorLogModelFilter;

    errorLogId?: any | undefined; 
    errorMessage?: any | undefined; 
    errorPath?: any | undefined; 

    toJSON(data?: any) : any;
}
