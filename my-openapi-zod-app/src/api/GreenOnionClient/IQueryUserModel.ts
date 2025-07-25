//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserModel } from "./ZQueryUserModel";


export interface IQueryUserModel extends z.infer<typeof ZQueryUserModel> {
  $zod: typeof ZQueryUserModel;
  toJSON(data?: any): any;
}

