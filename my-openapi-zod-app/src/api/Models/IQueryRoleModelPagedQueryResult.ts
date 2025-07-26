//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryRoleModelPagedQueryResult } from "../Schema/ZQueryRoleModelPagedQueryResult";
import type { IQueryRoleModel } from "./IQueryRoleModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryRoleModelPagedQueryResult extends z.infer<typeof ZQueryRoleModelPagedQueryResult> {
  $zod: typeof ZQueryRoleModelPagedQueryResult;
  toJSON(data?: any): any;
}

