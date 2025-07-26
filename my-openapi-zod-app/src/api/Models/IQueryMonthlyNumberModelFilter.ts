//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModelFilter } from "../Schema/ZQueryMonthlyNumberModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryMonthlyNumberModelFilter extends z.infer<typeof ZQueryMonthlyNumberModelFilter> {
  $zod: typeof ZQueryMonthlyNumberModelFilter;
  toJSON(data?: any): any;
}

