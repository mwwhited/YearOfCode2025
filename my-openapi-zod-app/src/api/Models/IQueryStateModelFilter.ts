//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryStateModelFilter } from "../Schema/ZQueryStateModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryStateModelFilter extends z.infer<typeof ZQueryStateModelFilter> {
  $zod: typeof ZQueryStateModelFilter;
  toJSON(data?: any): any;
}

