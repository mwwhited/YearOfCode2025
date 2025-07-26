//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryProductModelFilter } from "../Schema/ZQueryProductModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryProductModelFilter extends z.infer<typeof ZQueryProductModelFilter> {
  $zod: typeof ZQueryProductModelFilter;
  toJSON(data?: any): any;
}

