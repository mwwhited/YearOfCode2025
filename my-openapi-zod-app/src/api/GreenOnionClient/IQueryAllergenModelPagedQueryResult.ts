//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryAllergenModelPagedQueryResult } from "./ZQueryAllergenModelPagedQueryResult";
import type { IQueryAllergenModel } from "./IQueryAllergenModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryAllergenModelPagedQueryResult extends z.infer<typeof ZQueryAllergenModelPagedQueryResult> {
  $zod: typeof ZQueryAllergenModelPagedQueryResult;
  toJSON(data?: any): any;
}

