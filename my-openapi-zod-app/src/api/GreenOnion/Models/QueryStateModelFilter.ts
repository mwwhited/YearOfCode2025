//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryStateModelFilter from "../Schema/ZQueryStateModelFilter";
type QueryStateModelFilter = z.infer<typeof ZQueryStateModelFilter>;
interface IQueryStateModelFilter extends QueryStateModelFilter {
  $zod: typeof ZQueryStateModelFilter;
}
export type { QueryStateModelFilter, IQueryStateModelFilter };
export { ZQueryStateModelFilter };