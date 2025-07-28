//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryMonthlyNumberModel from "../Schema/ZQueryMonthlyNumberModel";
type QueryMonthlyNumberModel = z.infer<typeof ZQueryMonthlyNumberModel>;
interface IQueryMonthlyNumberModel extends QueryMonthlyNumberModel {
  $zod: typeof ZQueryMonthlyNumberModel;
}
export type { QueryMonthlyNumberModel, IQueryMonthlyNumberModel };
export { ZQueryMonthlyNumberModel };