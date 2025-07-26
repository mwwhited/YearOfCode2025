//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZProductGtinAllocationModel } from "../Schema/ZProductGtinAllocationModel";


export interface IProductGtinAllocationModel extends z.infer<typeof ZProductGtinAllocationModel> {
  $zod: typeof ZProductGtinAllocationModel;
  toJSON(data?: any): any;
}

