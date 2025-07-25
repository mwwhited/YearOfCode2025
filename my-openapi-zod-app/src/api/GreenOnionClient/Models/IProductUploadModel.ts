//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZProductUploadModel } from "../Schema/ZProductUploadModel";


export interface IProductUploadModel extends z.infer<typeof ZProductUploadModel> {
  $zod: typeof ZProductUploadModel;
  toJSON(data?: any): any;
}

