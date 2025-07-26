//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryUserActionLogModel } from "../Schema/ZQueryUserActionLogModel";


export interface IQueryUserActionLogModel extends z.infer<typeof ZQueryUserActionLogModel> {
  $zod: typeof ZQueryUserActionLogModel;
  toJSON(data?: any): any;
}

