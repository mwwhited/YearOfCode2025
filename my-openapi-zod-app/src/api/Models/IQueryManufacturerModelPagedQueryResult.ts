//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryManufacturerModelPagedQueryResult } from "../Schema/ZQueryManufacturerModelPagedQueryResult";
import type { IQueryManufacturerModel } from "./IQueryManufacturerModel";
import type { IResultMessage } from "./IResultMessage";


export interface IQueryManufacturerModelPagedQueryResult extends z.infer<typeof ZQueryManufacturerModelPagedQueryResult> {
  $zod: typeof ZQueryManufacturerModelPagedQueryResult;
  toJSON(data?: any): any;
}

