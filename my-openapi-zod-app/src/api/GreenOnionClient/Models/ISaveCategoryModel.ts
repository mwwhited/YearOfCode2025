//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveCategoryModel } from "../Schema/ZSaveCategoryModel";


export interface ISaveCategoryModel extends z.infer<typeof ZSaveCategoryModel> {
  $zod: typeof ZSaveCategoryModel;
  toJSON(data?: any): any;
}

