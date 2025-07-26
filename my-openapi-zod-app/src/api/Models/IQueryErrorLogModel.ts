//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryErrorLogModel } from "../Schema/ZQueryErrorLogModel";


export interface IQueryErrorLogModel extends z.infer<typeof ZQueryErrorLogModel> {
  $zod: typeof ZQueryErrorLogModel;
  toJSON(data?: any): any;
}

