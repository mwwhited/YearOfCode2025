//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIngredientModelSearchQuery } from "../Schema/ZQueryIngredientModelSearchQuery";
import type { IQueryIngredientModelFilter } from "./IQueryIngredientModelFilter";
import type { IQueryIngredientModelOrderBy } from "./IQueryIngredientModelOrderBy";


export interface IQueryIngredientModelSearchQuery extends z.infer<typeof ZQueryIngredientModelSearchQuery> {
  $zod: typeof ZQueryIngredientModelSearchQuery;
  toJSON(data?: any): any;
}

