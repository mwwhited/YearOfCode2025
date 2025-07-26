//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryIngredientModelPagedQueryResult } from "../Schema/ZQueryIngredientModelPagedQueryResult";
import type { IQueryIngredientModel } from "./IQueryIngredientModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryIngredientModelPagedQueryResult extends z.infer<typeof ZQueryIngredientModelPagedQueryResult> {
  $zod: typeof ZQueryIngredientModelPagedQueryResult;
  toJSON(data?: any): any;
}

