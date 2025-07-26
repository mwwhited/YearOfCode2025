//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryDefinedFilterModelOrderBy } from "../Schema/ZQueryDefinedFilterModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryDefinedFilterModelOrderBy extends z.infer<typeof ZQueryDefinedFilterModelOrderBy> {
  $zod: typeof ZQueryDefinedFilterModelOrderBy;
  toJSON(data?: any): any;
}

