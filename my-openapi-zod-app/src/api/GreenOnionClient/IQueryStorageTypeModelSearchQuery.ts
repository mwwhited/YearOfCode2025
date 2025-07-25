//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStorageTypeModelSearchQuery } from "./ZQueryStorageTypeModelSearchQuery";
import type { IQueryStorageTypeModelFilter } from "./IQueryStorageTypeModelFilter";
import type { IQueryStorageTypeModelOrderBy } from "./IQueryStorageTypeModelOrderBy";


export interface IQueryStorageTypeModelSearchQuery extends z.infer<typeof ZQueryStorageTypeModelSearchQuery> {
  $zod: typeof ZQueryStorageTypeModelSearchQuery;
  toJSON(data?: any): any;
}

