//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQueryUserModelFilter from "../Schema/ZQueryUserModelFilter";
type QueryUserModelFilter = z.infer<typeof ZQueryUserModelFilter>;
interface IQueryUserModelFilter extends QueryUserModelFilter {
  $zod: typeof ZQueryUserModelFilter;
}
export type { QueryUserModelFilter, IQueryUserModelFilter };
export { ZQueryUserModelFilter };