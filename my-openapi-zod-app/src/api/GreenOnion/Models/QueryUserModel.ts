//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryUserModel from "../Schema/ZQueryUserModel";
type QueryUserModel = z.infer<typeof ZQueryUserModel>;
interface IQueryUserModel extends QueryUserModel {
  $zod: typeof ZQueryUserModel;
}
export type { QueryUserModel, IQueryUserModel };
export { ZQueryUserModel };