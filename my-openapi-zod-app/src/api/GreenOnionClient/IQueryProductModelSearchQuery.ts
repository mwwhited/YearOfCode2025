//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryProductModelSearchQuery } from "./ZQueryProductModelSearchQuery";
import type { IQueryProductModelFilter } from "./IQueryProductModelFilter";
import type { IQueryProductModelOrderBy } from "./IQueryProductModelOrderBy";


export interface IQueryProductModelSearchQuery extends z.infer<typeof ZQueryProductModelSearchQuery> {
  $zod: typeof ZQueryProductModelSearchQuery;
  toJSON(data?: any): any;
}

