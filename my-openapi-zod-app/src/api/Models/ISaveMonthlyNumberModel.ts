//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZSaveMonthlyNumberModel } from "../Schema/ZSaveMonthlyNumberModel";


export interface ISaveMonthlyNumberModel extends z.infer<typeof ZSaveMonthlyNumberModel> {
  $zod: typeof ZSaveMonthlyNumberModel;
  toJSON(data?: any): any;
}

