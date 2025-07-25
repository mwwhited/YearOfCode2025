//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryRoleModelFilter } from "../Schema/ZQueryRoleModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryRoleModelFilter extends z.infer<typeof ZQueryRoleModelFilter> {
  $zod: typeof ZQueryRoleModelFilter;
  toJSON(data?: any): any;
}

