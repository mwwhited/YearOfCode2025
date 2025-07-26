//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZSaveAllergenModel } from "../Schema/ZSaveAllergenModel";


export interface ISaveAllergenModel extends z.infer<typeof ZSaveAllergenModel> {
  $zod: typeof ZSaveAllergenModel;
  toJSON(data?: any): any;
}

