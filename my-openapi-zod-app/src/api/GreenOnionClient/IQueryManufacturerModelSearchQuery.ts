//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryManufacturerModelSearchQuery } from "./ZQueryManufacturerModelSearchQuery";
import type { IQueryManufacturerModelFilter } from "./IQueryManufacturerModelFilter";
import type { IQueryManufacturerModelOrderBy } from "./IQueryManufacturerModelOrderBy";


export interface IQueryManufacturerModelSearchQuery extends z.infer<typeof ZQueryManufacturerModelSearchQuery> {
  $zod: typeof ZQueryManufacturerModelSearchQuery;
  toJSON(data?: any): any;
}

