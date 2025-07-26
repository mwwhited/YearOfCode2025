//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryRoleModelOrderBy } from "../Schema/ZQueryRoleModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryRoleModelOrderBy extends z.infer<typeof ZQueryRoleModelOrderBy> {
  $zod: typeof ZQueryRoleModelOrderBy;
  toJSON(data?: any): any;
}

