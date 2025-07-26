//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryUserActionLogModelSearchQuery } from "../Schema/ZQueryUserActionLogModelSearchQuery";
import type { IQueryUserActionLogModelFilter } from "./IQueryUserActionLogModelFilter";
import type { IQueryUserActionLogModelOrderBy } from "./IQueryUserActionLogModelOrderBy";


export interface IQueryUserActionLogModelSearchQuery extends z.infer<typeof ZQueryUserActionLogModelSearchQuery> {
  $zod: typeof ZQueryUserActionLogModelSearchQuery;
  toJSON(data?: any): any;
}

