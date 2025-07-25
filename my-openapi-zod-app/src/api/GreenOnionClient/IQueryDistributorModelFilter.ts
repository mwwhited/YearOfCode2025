//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDistributorModelFilter } from "./ZQueryDistributorModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryDistributorModelFilter extends z.infer<typeof ZQueryDistributorModelFilter> {
  $zod: typeof ZQueryDistributorModelFilter;
  toJSON(data?: any): any;
}

