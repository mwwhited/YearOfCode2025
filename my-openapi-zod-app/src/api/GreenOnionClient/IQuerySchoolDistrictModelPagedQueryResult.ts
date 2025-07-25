//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySchoolDistrictModelPagedQueryResult } from "./ZQuerySchoolDistrictModelPagedQueryResult";
import type { IQuerySchoolDistrictModel } from "./IQuerySchoolDistrictModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQuerySchoolDistrictModelPagedQueryResult extends z.infer<typeof ZQuerySchoolDistrictModelPagedQueryResult> {
  $zod: typeof ZQuerySchoolDistrictModelPagedQueryResult;
  toJSON(data?: any): any;
}

