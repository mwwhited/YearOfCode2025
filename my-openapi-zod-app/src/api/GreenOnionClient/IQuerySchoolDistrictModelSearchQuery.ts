//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySchoolDistrictModelSearchQuery } from "./ZQuerySchoolDistrictModelSearchQuery";
import type { IQuerySchoolDistrictModelFilter } from "./IQuerySchoolDistrictModelFilter";
import type { IQuerySchoolDistrictModelOrderBy } from "./IQuerySchoolDistrictModelOrderBy";


export interface IQuerySchoolDistrictModelSearchQuery extends z.infer<typeof ZQuerySchoolDistrictModelSearchQuery> {
  $zod: typeof ZQuerySchoolDistrictModelSearchQuery;
  toJSON(data?: any): any;
}

