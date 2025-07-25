//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIocCategoryModelPagedQueryResult } from "./ZQueryIocCategoryModelPagedQueryResult";
import type { IQueryIocCategoryModel } from "./IQueryIocCategoryModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryIocCategoryModelPagedQueryResult extends z.infer<typeof ZQueryIocCategoryModelPagedQueryResult> {
  $zod: typeof ZQueryIocCategoryModelPagedQueryResult;
  toJSON(data?: any): any;
}

