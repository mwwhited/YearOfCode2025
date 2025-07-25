//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryProductModelPagedQueryResult } from "./ZQueryProductModelPagedQueryResult";
import type { IQueryProductModel } from "./IQueryProductModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryProductModelPagedQueryResult extends z.infer<typeof ZQueryProductModelPagedQueryResult> {
  $zod: typeof ZQueryProductModelPagedQueryResult;
  toJSON(data?: any): any;
}

