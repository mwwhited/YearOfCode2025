//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryIngredientModel from "../Schema/ZQueryIngredientModel";
type QueryIngredientModel = z.infer<typeof ZQueryIngredientModel>;
interface IQueryIngredientModel extends QueryIngredientModel {
  $zod: typeof ZQueryIngredientModel;
}
export type { QueryIngredientModel, IQueryIngredientModel };
export { ZQueryIngredientModel };