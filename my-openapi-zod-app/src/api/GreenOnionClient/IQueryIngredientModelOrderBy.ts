//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIngredientModelOrderBy } from "./ZQueryIngredientModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryIngredientModelOrderBy extends z.infer<typeof ZQueryIngredientModelOrderBy> {
  $zod: typeof ZQueryIngredientModelOrderBy;
  toJSON(data?: any): any;
}

