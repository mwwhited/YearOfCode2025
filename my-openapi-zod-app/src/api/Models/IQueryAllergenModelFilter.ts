//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryAllergenModelFilter } from "../Schema/ZQueryAllergenModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryAllergenModelFilter extends z.infer<typeof ZQueryAllergenModelFilter> {
  $zod: typeof ZQueryAllergenModelFilter;
  toJSON(data?: any): any;
}

