//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryStateModel } from "../Schema/ZQueryStateModel";


export interface IQueryStateModel extends z.infer<typeof ZQueryStateModel> {
  $zod: typeof ZQueryStateModel;
  toJSON(data?: any): any;
}

