//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQuerySchoolDistrictModelFilter } from "../Schema/ZQuerySchoolDistrictModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQuerySchoolDistrictModelFilter extends z.infer<typeof ZQuerySchoolDistrictModelFilter> {
  $zod: typeof ZQuerySchoolDistrictModelFilter;
  toJSON(data?: any): any;
}

