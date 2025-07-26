//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryErrorLogModelSearchQuery } from "../Schema/ZQueryErrorLogModelSearchQuery";
import type { IQueryErrorLogModelFilter } from "./IQueryErrorLogModelFilter";
import type { IQueryErrorLogModelOrderBy } from "./IQueryErrorLogModelOrderBy";


export interface IQueryErrorLogModelSearchQuery extends z.infer<typeof ZQueryErrorLogModelSearchQuery> {
  $zod: typeof ZQueryErrorLogModelSearchQuery;
  toJSON(data?: any): any;
}

