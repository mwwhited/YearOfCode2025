//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryStorageTypeModel } from "../Schema/ZQueryStorageTypeModel";


export interface IQueryStorageTypeModel extends z.infer<typeof ZQueryStorageTypeModel> {
  $zod: typeof ZQueryStorageTypeModel;
  toJSON(data?: any): any;
}

