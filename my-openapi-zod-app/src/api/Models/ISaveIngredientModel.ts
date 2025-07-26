//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveIngredientModel } from "../Schema/ZSaveIngredientModel";


export interface ISaveIngredientModel extends z.infer<typeof ZSaveIngredientModel> {
  $zod: typeof ZSaveIngredientModel;
  toJSON(data?: any): any;
}

