//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryErrorLogModelFilter } from "../Schema/ZQueryErrorLogModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryErrorLogModelFilter extends z.infer<typeof ZQueryErrorLogModelFilter> {
  $zod: typeof ZQueryErrorLogModelFilter;
  toJSON(data?: any): any;
}

