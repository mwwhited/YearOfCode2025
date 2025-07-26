//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIocCategoryModelFilter } from "../Schema/ZQueryIocCategoryModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryIocCategoryModelFilter extends z.infer<typeof ZQueryIocCategoryModelFilter> {
  $zod: typeof ZQueryIocCategoryModelFilter;
  toJSON(data?: any): any;
}

