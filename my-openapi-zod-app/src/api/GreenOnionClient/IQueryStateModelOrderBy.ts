//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStateModelOrderBy } from "./ZQueryStateModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryStateModelOrderBy extends z.infer<typeof ZQueryStateModelOrderBy> {
  $zod: typeof ZQueryStateModelOrderBy;
  toJSON(data?: any): any;
}

