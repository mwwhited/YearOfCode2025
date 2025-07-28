//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQuerySubCategoryModel from "../Schema/ZQuerySubCategoryModel";
type QuerySubCategoryModel = z.infer<typeof ZQuerySubCategoryModel>;
interface IQuerySubCategoryModel extends QuerySubCategoryModel {
  $zod: typeof ZQuerySubCategoryModel;
}
export type { QuerySubCategoryModel, IQuerySubCategoryModel };
export { ZQuerySubCategoryModel };