//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryStateModelFilter from "../Schema/ZQueryStateModelFilter";
type QueryStateModelFilter = z.infer<typeof ZQueryStateModelFilter>;
interface IQueryStateModelFilter extends QueryStateModelFilter {
  $zod: typeof ZQueryStateModelFilter;
}
export type { QueryStateModelFilter, IQueryStateModelFilter };
export { ZQueryStateModelFilter };