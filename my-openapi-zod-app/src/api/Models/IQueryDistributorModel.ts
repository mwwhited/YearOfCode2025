//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryDistributorModel } from "../Schema/ZQueryDistributorModel";


export interface IQueryDistributorModel extends z.infer<typeof ZQueryDistributorModel> {
  $zod: typeof ZQueryDistributorModel;
  toJSON(data?: any): any;
}

