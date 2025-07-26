//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZQueryProductModel } from "../Schema/ZQueryProductModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";


export interface IQueryProductModel extends z.infer<typeof ZQueryProductModel> {
  $zod: typeof ZQueryProductModel;
  toJSON(data?: any): any;
}

