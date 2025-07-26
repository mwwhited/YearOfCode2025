//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryDistributorModelSearchQuery } from "../Schema/ZQueryDistributorModelSearchQuery";
import type { IQueryDistributorModelFilter } from "./IQueryDistributorModelFilter";
import type { IQueryDistributorModelOrderBy } from "./IQueryDistributorModelOrderBy";


export interface IQueryDistributorModelSearchQuery extends z.infer<typeof ZQueryDistributorModelSearchQuery> {
  $zod: typeof ZQueryDistributorModelSearchQuery;
  toJSON(data?: any): any;
}

