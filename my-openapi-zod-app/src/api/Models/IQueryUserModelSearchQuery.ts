//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryUserModelSearchQuery } from "../Schema/ZQueryUserModelSearchQuery";
import type { IQueryUserModelFilter } from "./IQueryUserModelFilter";
import type { IQueryUserModelOrderBy } from "./IQueryUserModelOrderBy";


export interface IQueryUserModelSearchQuery extends z.infer<typeof ZQueryUserModelSearchQuery> {
  $zod: typeof ZQueryUserModelSearchQuery;
  toJSON(data?: any): any;
}

