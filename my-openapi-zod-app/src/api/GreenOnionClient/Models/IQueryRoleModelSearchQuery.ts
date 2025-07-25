//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryRoleModelSearchQuery } from "../Schema/ZQueryRoleModelSearchQuery";
import type { IQueryRoleModelFilter } from "./IQueryRoleModelFilter";
import type { IQueryRoleModelOrderBy } from "./IQueryRoleModelOrderBy";


export interface IQueryRoleModelSearchQuery extends z.infer<typeof ZQueryRoleModelSearchQuery> {
  $zod: typeof ZQueryRoleModelSearchQuery;
  toJSON(data?: any): any;
}

