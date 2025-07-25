//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModelSearchQuery } from "../Schema/ZQueryMonthlyNumberModelSearchQuery";
import type { IQueryMonthlyNumberModelFilter } from "./IQueryMonthlyNumberModelFilter";
import type { IQueryMonthlyNumberModelOrderBy } from "./IQueryMonthlyNumberModelOrderBy";


export interface IQueryMonthlyNumberModelSearchQuery extends z.infer<typeof ZQueryMonthlyNumberModelSearchQuery> {
  $zod: typeof ZQueryMonthlyNumberModelSearchQuery;
  toJSON(data?: any): any;
}

