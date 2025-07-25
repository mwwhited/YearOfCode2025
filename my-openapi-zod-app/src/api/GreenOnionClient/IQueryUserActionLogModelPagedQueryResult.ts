//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserActionLogModelPagedQueryResult } from "./ZQueryUserActionLogModelPagedQueryResult";
import type { IQueryUserActionLogModel } from "./IQueryUserActionLogModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryUserActionLogModelPagedQueryResult extends z.infer<typeof ZQueryUserActionLogModelPagedQueryResult> {
  $zod: typeof ZQueryUserActionLogModelPagedQueryResult;
  toJSON(data?: any): any;
}

