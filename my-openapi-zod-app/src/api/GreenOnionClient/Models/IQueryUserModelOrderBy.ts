//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserModelOrderBy } from "../Schema/ZQueryUserModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryUserModelOrderBy extends z.infer<typeof ZQueryUserModelOrderBy> {
  $zod: typeof ZQueryUserModelOrderBy;
  toJSON(data?: any): any;
}

