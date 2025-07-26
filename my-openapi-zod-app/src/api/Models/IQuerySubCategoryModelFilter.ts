//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySubCategoryModelFilter } from "../Schema/ZQuerySubCategoryModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQuerySubCategoryModelFilter extends z.infer<typeof ZQuerySubCategoryModelFilter> {
  $zod: typeof ZQuerySubCategoryModelFilter;
  toJSON(data?: any): any;
}

