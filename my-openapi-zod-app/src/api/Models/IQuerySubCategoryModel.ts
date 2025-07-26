//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQuerySubCategoryModel } from "../Schema/ZQuerySubCategoryModel";


export interface IQuerySubCategoryModel extends z.infer<typeof ZQuerySubCategoryModel> {
  $zod: typeof ZQuerySubCategoryModel;
  toJSON(data?: any): any;
}

