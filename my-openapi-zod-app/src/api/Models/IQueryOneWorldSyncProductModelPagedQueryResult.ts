//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryOneWorldSyncProductModelPagedQueryResult } from "../Schema/ZQueryOneWorldSyncProductModelPagedQueryResult";
import type { IQueryOneWorldSyncProductModel } from "./IQueryOneWorldSyncProductModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryOneWorldSyncProductModelPagedQueryResult extends z.infer<typeof ZQueryOneWorldSyncProductModelPagedQueryResult> {
  $zod: typeof ZQueryOneWorldSyncProductModelPagedQueryResult;
  toJSON(data?: any): any;
}

