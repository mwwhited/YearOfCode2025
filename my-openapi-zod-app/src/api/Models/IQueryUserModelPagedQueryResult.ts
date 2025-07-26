//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryUserModelPagedQueryResult } from "../Schema/ZQueryUserModelPagedQueryResult";
import type { IQueryUserModel } from "./IQueryUserModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryUserModelPagedQueryResult extends z.infer<typeof ZQueryUserModelPagedQueryResult> {
  $zod: typeof ZQueryUserModelPagedQueryResult;
  toJSON(data?: any): any;
}

