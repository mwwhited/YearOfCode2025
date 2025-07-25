//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryOneWorldSyncProductModelSearchQuery } from "./ZQueryOneWorldSyncProductModelSearchQuery";
import type { IQueryOneWorldSyncProductModelFilter } from "./IQueryOneWorldSyncProductModelFilter";
import type { IQueryOneWorldSyncProductModelOrderBy } from "./IQueryOneWorldSyncProductModelOrderBy";


export interface IQueryOneWorldSyncProductModelSearchQuery extends z.infer<typeof ZQueryOneWorldSyncProductModelSearchQuery> {
  $zod: typeof ZQueryOneWorldSyncProductModelSearchQuery;
  toJSON(data?: any): any;
}

