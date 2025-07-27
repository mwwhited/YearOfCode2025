//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryErrorLogModel from "../Schema/ZQueryErrorLogModel";
type QueryErrorLogModel = z.infer<typeof ZQueryErrorLogModel>;
interface IQueryErrorLogModel extends QueryErrorLogModel {
  $zod: typeof ZQueryErrorLogModel;
}
export type { QueryErrorLogModel, IQueryErrorLogModel };
export { ZQueryErrorLogModel };