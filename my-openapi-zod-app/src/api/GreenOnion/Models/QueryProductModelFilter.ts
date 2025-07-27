//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZQueryProductModelFilter from "../Schema/ZQueryProductModelFilter";
type QueryProductModelFilter = z.infer<typeof ZQueryProductModelFilter>;
interface IQueryProductModelFilter extends QueryProductModelFilter {
  $zod: typeof ZQueryProductModelFilter;
}
export type { QueryProductModelFilter, IQueryProductModelFilter };
export { ZQueryProductModelFilter };