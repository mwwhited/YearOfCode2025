//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryUserActionLogModelFilter } from "../Schema/ZQueryUserActionLogModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryUserActionLogModelFilter extends z.infer<typeof ZQueryUserActionLogModelFilter> {
  $zod: typeof ZQueryUserActionLogModelFilter;
  toJSON(data?: any): any;
}

