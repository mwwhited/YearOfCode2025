//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryProductModelOrderBy } from "../Schema/ZQueryProductModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryProductModelOrderBy extends z.infer<typeof ZQueryProductModelOrderBy> {
  $zod: typeof ZQueryProductModelOrderBy;
  toJSON(data?: any): any;
}

