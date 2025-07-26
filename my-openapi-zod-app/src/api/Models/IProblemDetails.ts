//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZProblemDetails } from "../Schema/ZProblemDetails";


export interface IProblemDetails extends z.infer<typeof ZProblemDetails> {
  $zod: typeof ZProblemDetails;
  toJSON(data?: any): any;
}

