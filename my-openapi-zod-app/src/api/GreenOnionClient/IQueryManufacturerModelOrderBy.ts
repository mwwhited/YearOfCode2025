//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryManufacturerModelOrderBy } from "./ZQueryManufacturerModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryManufacturerModelOrderBy extends z.infer<typeof ZQueryManufacturerModelOrderBy> {
  $zod: typeof ZQueryManufacturerModelOrderBy;
  toJSON(data?: any): any;
}

