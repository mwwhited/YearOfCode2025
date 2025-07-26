//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryOneWorldSyncProductModelFilter } from "../Schema/ZQueryOneWorldSyncProductModelFilter";
import type { IFilterParameter } from "./IFilterParameter";


export interface IQueryOneWorldSyncProductModelFilter extends z.infer<typeof ZQueryOneWorldSyncProductModelFilter> {
  $zod: typeof ZQueryOneWorldSyncProductModelFilter;
  toJSON(data?: any): any;
}

