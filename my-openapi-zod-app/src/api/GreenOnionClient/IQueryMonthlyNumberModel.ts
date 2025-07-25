//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryMonthlyNumberModel } from "./ZQueryMonthlyNumberModel";


export interface IQueryMonthlyNumberModel extends z.infer<typeof ZQueryMonthlyNumberModel> {
  $zod: typeof ZQueryMonthlyNumberModel;
  toJSON(data?: any): any;
}

