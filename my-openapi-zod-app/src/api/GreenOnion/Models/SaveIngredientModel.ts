//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZSaveIngredientModel from "../Schema/ZSaveIngredientModel";
type SaveIngredientModel = z.infer<typeof ZSaveIngredientModel>;
interface ISaveIngredientModel extends SaveIngredientModel {
  $zod: typeof ZSaveIngredientModel;
}
export type { SaveIngredientModel, ISaveIngredientModel };
export { ZSaveIngredientModel };