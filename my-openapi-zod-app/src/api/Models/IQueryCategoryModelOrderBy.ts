//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryCategoryModelOrderBy } from "../Schema/ZQueryCategoryModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQueryCategoryModelOrderBy extends z.infer<typeof ZQueryCategoryModelOrderBy> {
  $zod: typeof ZQueryCategoryModelOrderBy;
  toJSON(data?: any): any;
}

