//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZFilterParameter } from "../Schema/ZFilterParameter";


export interface IFilterParameter extends z.infer<typeof ZFilterParameter> {
  $zod: typeof ZFilterParameter;
  toJSON(data?: any): any;
}

