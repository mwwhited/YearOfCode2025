//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDefinedFilterModelSearchQuery } from "../Schema/ZQueryDefinedFilterModelSearchQuery";
import type { IQueryDefinedFilterModelFilter } from "./IQueryDefinedFilterModelFilter";
import type { IQueryDefinedFilterModelOrderBy } from "./IQueryDefinedFilterModelOrderBy";


export interface IQueryDefinedFilterModelSearchQuery extends z.infer<typeof ZQueryDefinedFilterModelSearchQuery> {
  $zod: typeof ZQueryDefinedFilterModelSearchQuery;
  toJSON(data?: any): any;
}

