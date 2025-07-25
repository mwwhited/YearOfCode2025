//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModelPagedQueryResult } from "../Schema/ZQueryMonthlyNumberModelPagedQueryResult";
import type { IQueryMonthlyNumberModel } from "./IQueryMonthlyNumberModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryMonthlyNumberModelPagedQueryResult extends z.infer<typeof ZQueryMonthlyNumberModelPagedQueryResult> {
  $zod: typeof ZQueryMonthlyNumberModelPagedQueryResult;
  toJSON(data?: any): any;
}

