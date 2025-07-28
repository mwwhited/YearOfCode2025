//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZSaveMonthlyNumberModel from "../Schema/ZSaveMonthlyNumberModel";
type SaveMonthlyNumberModel = z.infer<typeof ZSaveMonthlyNumberModel>;
interface ISaveMonthlyNumberModel extends SaveMonthlyNumberModel {
  $zod: typeof ZSaveMonthlyNumberModel;
}
export type { SaveMonthlyNumberModel, ISaveMonthlyNumberModel };
export { ZSaveMonthlyNumberModel };