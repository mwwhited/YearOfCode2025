//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryRoleModel from "../Schema/ZQueryRoleModel";
type QueryRoleModel = z.infer<typeof ZQueryRoleModel>;
interface IQueryRoleModel extends QueryRoleModel {
  $zod: typeof ZQueryRoleModel;
}
export type { QueryRoleModel, IQueryRoleModel };
export { ZQueryRoleModel };