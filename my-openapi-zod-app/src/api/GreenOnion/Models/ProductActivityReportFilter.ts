//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZProductActivityReportFilter from "../Schema/ZProductActivityReportFilter";
type ProductActivityReportFilter = z.infer<typeof ZProductActivityReportFilter>;
interface IProductActivityReportFilter extends ProductActivityReportFilter {
  $zod: typeof ZProductActivityReportFilter;
}
export type { ProductActivityReportFilter, IProductActivityReportFilter };
export { ZProductActivityReportFilter };