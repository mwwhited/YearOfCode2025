//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryIocCategoryModelOrderBy } from "./ZQueryIocCategoryModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryIocCategoryModelOrderBy extends z.infer<typeof ZQueryIocCategoryModelOrderBy> {
  $zod: typeof ZQueryIocCategoryModelOrderBy;
  toJSON(data?: any): any;
}

