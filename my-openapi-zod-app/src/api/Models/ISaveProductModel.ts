//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZSaveProductModel } from "../Schema/ZSaveProductModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";


export interface ISaveProductModel extends z.infer<typeof ZSaveProductModel> {
  $zod: typeof ZSaveProductModel;
  toJSON(data?: any): any;
}

