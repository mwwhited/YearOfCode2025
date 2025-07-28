//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryProductModelFilter from "../Schema/ZQueryProductModelFilter";
type QueryProductModelFilter = z.infer<typeof ZQueryProductModelFilter>;
interface IQueryProductModelFilter extends QueryProductModelFilter {
  $zod: typeof ZQueryProductModelFilter;
}
export type { QueryProductModelFilter, IQueryProductModelFilter };
export { ZQueryProductModelFilter };