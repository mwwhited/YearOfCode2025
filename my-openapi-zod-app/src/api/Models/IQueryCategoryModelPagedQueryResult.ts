//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryCategoryModelPagedQueryResult } from "../Schema/ZQueryCategoryModelPagedQueryResult";
import type { IQueryCategoryModel } from "./IQueryCategoryModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryCategoryModelPagedQueryResult extends z.infer<typeof ZQueryCategoryModelPagedQueryResult> {
  $zod: typeof ZQueryCategoryModelPagedQueryResult;
  toJSON(data?: any): any;
}

