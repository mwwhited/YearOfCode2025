//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryDefinedFilterModelPagedQueryResult } from "../Schema/ZQueryDefinedFilterModelPagedQueryResult";
import type { IQueryDefinedFilterModel } from "./IQueryDefinedFilterModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryDefinedFilterModelPagedQueryResult extends z.infer<typeof ZQueryDefinedFilterModelPagedQueryResult> {
  $zod: typeof ZQueryDefinedFilterModelPagedQueryResult;
  toJSON(data?: any): any;
}

