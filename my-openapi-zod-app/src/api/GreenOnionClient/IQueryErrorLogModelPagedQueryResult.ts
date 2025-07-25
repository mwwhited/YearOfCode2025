//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryErrorLogModelPagedQueryResult } from "./ZQueryErrorLogModelPagedQueryResult";
import type { IQueryErrorLogModel } from "./IQueryErrorLogModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryErrorLogModelPagedQueryResult extends z.infer<typeof ZQueryErrorLogModelPagedQueryResult> {
  $zod: typeof ZQueryErrorLogModelPagedQueryResult;
  toJSON(data?: any): any;
}

