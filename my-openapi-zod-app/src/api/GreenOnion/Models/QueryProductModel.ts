//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryProductModel from "../Schema/ZQueryProductModel";
type QueryProductModel = z.infer<typeof ZQueryProductModel>;
interface IQueryProductModel extends QueryProductModel {
  $zod: typeof ZQueryProductModel;
}
export type { QueryProductModel, IQueryProductModel };
export { ZQueryProductModel };