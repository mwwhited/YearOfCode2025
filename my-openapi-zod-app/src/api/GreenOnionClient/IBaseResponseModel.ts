//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZBaseResponseModel } from "./ZBaseResponseModel";


export interface IBaseResponseModel extends z.infer<typeof ZBaseResponseModel> {
  $zod: typeof ZBaseResponseModel;
  toJSON(data?: any): any;
}

