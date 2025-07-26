//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZProductResponse } from "../Schema/ZProductResponse";


export interface IProductResponse extends z.infer<typeof ZProductResponse> {
  $zod: typeof ZProductResponse;
  toJSON(data?: any): any;
}

