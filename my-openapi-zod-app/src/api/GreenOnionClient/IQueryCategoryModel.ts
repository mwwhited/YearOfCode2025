//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryCategoryModel } from "./ZQueryCategoryModel";


export interface IQueryCategoryModel extends z.infer<typeof ZQueryCategoryModel> {
  $zod: typeof ZQueryCategoryModel;
  toJSON(data?: any): any;
}

