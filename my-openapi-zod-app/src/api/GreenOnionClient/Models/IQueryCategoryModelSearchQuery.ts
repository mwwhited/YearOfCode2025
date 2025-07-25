//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryCategoryModelSearchQuery } from "../Schema/ZQueryCategoryModelSearchQuery";
import type { IQueryCategoryModelFilter } from "./IQueryCategoryModelFilter";
import type { IQueryCategoryModelOrderBy } from "./IQueryCategoryModelOrderBy";


export interface IQueryCategoryModelSearchQuery extends z.infer<typeof ZQueryCategoryModelSearchQuery> {
  $zod: typeof ZQueryCategoryModelSearchQuery;
  toJSON(data?: any): any;
}

