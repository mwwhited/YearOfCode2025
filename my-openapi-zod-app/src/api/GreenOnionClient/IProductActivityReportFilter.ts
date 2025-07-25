//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProductActivityReportFilter } from "./ZProductActivityReportFilter";


export interface IProductActivityReportFilter extends z.infer<typeof ZProductActivityReportFilter> {
  $zod: typeof ZProductActivityReportFilter;
  toJSON(data?: any): any;
}

