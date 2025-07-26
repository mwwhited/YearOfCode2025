//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryIngredientModel } from "../Schema/ZQueryIngredientModel";


export interface IQueryIngredientModel extends z.infer<typeof ZQueryIngredientModel> {
  $zod: typeof ZQueryIngredientModel;
  toJSON(data?: any): any;
}

