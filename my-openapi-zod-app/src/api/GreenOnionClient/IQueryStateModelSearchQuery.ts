//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStateModelSearchQuery } from "./ZQueryStateModelSearchQuery";
import type { IQueryStateModelFilter } from "./IQueryStateModelFilter";
import type { IQueryStateModelOrderBy } from "./IQueryStateModelOrderBy";


export interface IQueryStateModelSearchQuery extends z.infer<typeof ZQueryStateModelSearchQuery> {
  $zod: typeof ZQueryStateModelSearchQuery;
  toJSON(data?: any): any;
}

