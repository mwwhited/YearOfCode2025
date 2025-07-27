//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryStorageTypeModel from "../Schema/ZQueryStorageTypeModel";
type QueryStorageTypeModel = z.infer<typeof ZQueryStorageTypeModel>;
interface IQueryStorageTypeModel extends QueryStorageTypeModel {
  $zod: typeof ZQueryStorageTypeModel;
}
export type { QueryStorageTypeModel, IQueryStorageTypeModel };
export { ZQueryStorageTypeModel };