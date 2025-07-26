//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryStorageTypeModelPagedQueryResult } from "../Schema/ZQueryStorageTypeModelPagedQueryResult";
import type { IQueryStorageTypeModel } from "./IQueryStorageTypeModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryStorageTypeModelPagedQueryResult extends z.infer<typeof ZQueryStorageTypeModelPagedQueryResult> {
  $zod: typeof ZQueryStorageTypeModelPagedQueryResult;
  toJSON(data?: any): any;
}

