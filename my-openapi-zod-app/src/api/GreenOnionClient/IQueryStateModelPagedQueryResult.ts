//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStateModelPagedQueryResult } from "./ZQueryStateModelPagedQueryResult";
import type { IQueryStateModel } from "./IQueryStateModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryStateModelPagedQueryResult extends z.infer<typeof ZQueryStateModelPagedQueryResult> {
  $zod: typeof ZQueryStateModelPagedQueryResult;
  toJSON(data?: any): any;
}

