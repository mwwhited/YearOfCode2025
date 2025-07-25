//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveUserModel } from "./ZSaveUserModel";


export interface ISaveUserModel extends z.infer<typeof ZSaveUserModel> {
  $zod: typeof ZSaveUserModel;
  toJSON(data?: any): any;
}

