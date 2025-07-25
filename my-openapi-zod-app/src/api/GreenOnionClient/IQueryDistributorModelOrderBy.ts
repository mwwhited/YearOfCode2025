//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDistributorModelOrderBy } from "./ZQueryDistributorModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryDistributorModelOrderBy extends z.infer<typeof ZQueryDistributorModelOrderBy> {
  $zod: typeof ZQueryDistributorModelOrderBy;
  toJSON(data?: any): any;
}

