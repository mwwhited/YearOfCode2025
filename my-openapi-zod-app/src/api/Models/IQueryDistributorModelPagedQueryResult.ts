//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryDistributorModelPagedQueryResult } from "../Schema/ZQueryDistributorModelPagedQueryResult";
import type { IQueryDistributorModel } from "./IQueryDistributorModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryDistributorModelPagedQueryResult extends z.infer<typeof ZQueryDistributorModelPagedQueryResult> {
  $zod: typeof ZQueryDistributorModelPagedQueryResult;
  toJSON(data?: any): any;
}

