//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySubCategoryModelSearchQuery } from "../Schema/ZQuerySubCategoryModelSearchQuery";
import type { IQuerySubCategoryModelFilter } from "./IQuerySubCategoryModelFilter";
import type { IQuerySubCategoryModelOrderBy } from "./IQuerySubCategoryModelOrderBy";


export interface IQuerySubCategoryModelSearchQuery extends z.infer<typeof ZQuerySubCategoryModelSearchQuery> {
  $zod: typeof ZQuerySubCategoryModelSearchQuery;
  toJSON(data?: any): any;
}

