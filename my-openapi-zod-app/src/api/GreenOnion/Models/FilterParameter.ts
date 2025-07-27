//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZFilterParameter from "../Schema/ZFilterParameter";
type FilterParameter = z.infer<typeof ZFilterParameter>;
interface IFilterParameter extends FilterParameter {
  $zod: typeof ZFilterParameter;
}
export type { FilterParameter, IFilterParameter };
export { ZFilterParameter };