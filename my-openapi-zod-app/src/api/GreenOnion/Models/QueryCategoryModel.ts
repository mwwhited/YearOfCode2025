//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryCategoryModel from "../Schema/ZQueryCategoryModel";
type QueryCategoryModel = z.infer<typeof ZQueryCategoryModel>;
interface IQueryCategoryModel extends QueryCategoryModel {
  $zod: typeof ZQueryCategoryModel;
}
export type { QueryCategoryModel, IQueryCategoryModel };
export { ZQueryCategoryModel };