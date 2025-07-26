//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryErrorLogModelOrderBy } from "../Schema/ZQueryErrorLogModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryErrorLogModelOrderBy extends z.infer<typeof ZQueryErrorLogModelOrderBy> {
  $zod: typeof ZQueryErrorLogModelOrderBy;
  toJSON(data?: any): any;
}

