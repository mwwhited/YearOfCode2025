//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZSaveCategoryModel from "../Schema/ZSaveCategoryModel";
type SaveCategoryModel = z.infer<typeof ZSaveCategoryModel>;
interface ISaveCategoryModel extends SaveCategoryModel {
  $zod: typeof ZSaveCategoryModel;
}
export type { SaveCategoryModel, ISaveCategoryModel };
export { ZSaveCategoryModel };