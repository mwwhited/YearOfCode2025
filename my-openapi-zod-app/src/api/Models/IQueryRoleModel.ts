//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryRoleModel } from "../Schema/ZQueryRoleModel";


export interface IQueryRoleModel extends z.infer<typeof ZQueryRoleModel> {
  $zod: typeof ZQueryRoleModel;
  toJSON(data?: any): any;
}

