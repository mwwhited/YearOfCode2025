//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryOneWorldSyncProductModelOrderBy } from "../Schema/ZQueryOneWorldSyncProductModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryOneWorldSyncProductModelOrderBy extends z.infer<typeof ZQueryOneWorldSyncProductModelOrderBy> {
  $zod: typeof ZQueryOneWorldSyncProductModelOrderBy;
  toJSON(data?: any): any;
}

