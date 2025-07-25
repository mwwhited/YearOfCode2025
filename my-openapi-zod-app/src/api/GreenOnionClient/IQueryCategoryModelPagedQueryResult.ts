//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryCategoryModelPagedQueryResult } from "./ZQueryCategoryModelPagedQueryResult";
import type { IQueryCategoryModel } from "./IQueryCategoryModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryCategoryModelPagedQueryResult extends z.infer<typeof ZQueryCategoryModelPagedQueryResult> {
  $zod: typeof ZQueryCategoryModelPagedQueryResult;
  toJSON(data?: any): any;
}

