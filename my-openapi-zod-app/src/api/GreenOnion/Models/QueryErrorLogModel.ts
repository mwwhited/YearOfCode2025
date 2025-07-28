//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryErrorLogModel from "../Schema/ZQueryErrorLogModel";
type QueryErrorLogModel = z.infer<typeof ZQueryErrorLogModel>;
interface IQueryErrorLogModel extends QueryErrorLogModel {
  $zod: typeof ZQueryErrorLogModel;
}
export type { QueryErrorLogModel, IQueryErrorLogModel };
export { ZQueryErrorLogModel };