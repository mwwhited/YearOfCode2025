//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryStateModel from "../Schema/ZQueryStateModel";
type QueryStateModel = z.infer<typeof ZQueryStateModel>;
interface IQueryStateModel extends QueryStateModel {
  $zod: typeof ZQueryStateModel;
}
export type { QueryStateModel, IQueryStateModel };
export { ZQueryStateModel };