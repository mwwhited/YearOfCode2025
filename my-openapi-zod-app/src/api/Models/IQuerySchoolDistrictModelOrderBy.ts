//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQuerySchoolDistrictModelOrderBy } from "../Schema/ZQuerySchoolDistrictModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";


export interface IQuerySchoolDistrictModelOrderBy extends z.infer<typeof ZQuerySchoolDistrictModelOrderBy> {
  $zod: typeof ZQuerySchoolDistrictModelOrderBy;
  toJSON(data?: any): any;
}

