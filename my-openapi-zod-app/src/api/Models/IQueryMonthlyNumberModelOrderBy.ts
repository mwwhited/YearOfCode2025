//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModelOrderBy } from "../Schema/ZQueryMonthlyNumberModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryMonthlyNumberModelOrderBy extends z.infer<typeof ZQueryMonthlyNumberModelOrderBy> {
  $zod: typeof ZQueryMonthlyNumberModelOrderBy;
  toJSON(data?: any): any;
}

