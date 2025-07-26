//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserModelFilter } from "../Schema/ZQueryUserModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryUserModelFilter extends z.infer<typeof ZQueryUserModelFilter> {
  $zod: typeof ZQueryUserModelFilter;
  toJSON(data?: any): any;
}

