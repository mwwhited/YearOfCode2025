//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySubCategoryModelPagedQueryResult } from "./ZQuerySubCategoryModelPagedQueryResult";
import type { IQuerySubCategoryModel } from "./IQuerySubCategoryModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQuerySubCategoryModelPagedQueryResult extends z.infer<typeof ZQuerySubCategoryModelPagedQueryResult> {
  $zod: typeof ZQuerySubCategoryModelPagedQueryResult;
  toJSON(data?: any): any;
}

