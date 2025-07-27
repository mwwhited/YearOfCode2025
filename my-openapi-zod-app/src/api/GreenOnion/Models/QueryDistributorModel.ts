//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryDistributorModel from "../Schema/ZQueryDistributorModel";
type QueryDistributorModel = z.infer<typeof ZQueryDistributorModel>;
interface IQueryDistributorModel extends QueryDistributorModel {
  $zod: typeof ZQueryDistributorModel;
}
export type { QueryDistributorModel, IQueryDistributorModel };
export { ZQueryDistributorModel };