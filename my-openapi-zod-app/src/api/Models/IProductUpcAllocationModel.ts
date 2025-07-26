//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZProductUpcAllocationModel } from "../Schema/ZProductUpcAllocationModel";


export interface IProductUpcAllocationModel extends z.infer<typeof ZProductUpcAllocationModel> {
  $zod: typeof ZProductUpcAllocationModel;
  toJSON(data?: any): any;
}

