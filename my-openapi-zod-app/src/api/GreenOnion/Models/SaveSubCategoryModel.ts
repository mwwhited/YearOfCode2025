//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZSaveSubCategoryModel from "../Schema/ZSaveSubCategoryModel";
type SaveSubCategoryModel = z.infer<typeof ZSaveSubCategoryModel>;
interface ISaveSubCategoryModel extends SaveSubCategoryModel {
  $zod: typeof ZSaveSubCategoryModel;
}
export type { SaveSubCategoryModel, ISaveSubCategoryModel };
export { ZSaveSubCategoryModel };