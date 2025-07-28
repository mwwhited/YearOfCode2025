//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZFilterParameter from "../Schema/ZFilterParameter";
type FilterParameter = z.infer<typeof ZFilterParameter>;
interface IFilterParameter extends FilterParameter {
  $zod: typeof ZFilterParameter;
}
export type { FilterParameter, IFilterParameter };
export { ZFilterParameter };