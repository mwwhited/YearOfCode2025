//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryAllergenModel from "../Schema/ZQueryAllergenModel";
type QueryAllergenModel = z.infer<typeof ZQueryAllergenModel>;
interface IQueryAllergenModel extends QueryAllergenModel {
  $zod: typeof ZQueryAllergenModel;
}
export type { QueryAllergenModel, IQueryAllergenModel };
export { ZQueryAllergenModel };