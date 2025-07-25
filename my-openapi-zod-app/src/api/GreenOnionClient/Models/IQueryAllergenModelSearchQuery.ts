//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryAllergenModelSearchQuery } from "../Schema/ZQueryAllergenModelSearchQuery";
import type { IQueryAllergenModelFilter } from "./IQueryAllergenModelFilter";
import type { IQueryAllergenModelOrderBy } from "./IQueryAllergenModelOrderBy";


export interface IQueryAllergenModelSearchQuery extends z.infer<typeof ZQueryAllergenModelSearchQuery> {
  $zod: typeof ZQueryAllergenModelSearchQuery;
  toJSON(data?: any): any;
}

