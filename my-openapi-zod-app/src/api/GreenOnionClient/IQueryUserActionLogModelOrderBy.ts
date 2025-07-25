//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserActionLogModelOrderBy } from "./ZQueryUserActionLogModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryUserActionLogModelOrderBy extends z.infer<typeof ZQueryUserActionLogModelOrderBy> {
  $zod: typeof ZQueryUserActionLogModelOrderBy;
  toJSON(data?: any): any;
}

