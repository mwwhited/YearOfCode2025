//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryUserActionLogModel from "../Schema/ZQueryUserActionLogModel";
type QueryUserActionLogModel = z.infer<typeof ZQueryUserActionLogModel>;
interface IQueryUserActionLogModel extends QueryUserActionLogModel {
  $zod: typeof ZQueryUserActionLogModel;
}
export type { QueryUserActionLogModel, IQueryUserActionLogModel };
export { ZQueryUserActionLogModel };