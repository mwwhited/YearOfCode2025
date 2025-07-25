//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZUserResponseModel } from "./ZUserResponseModel";
import type { IRoleMst } from "./IRoleMst";


export interface IUserResponseModel extends z.infer<typeof ZUserResponseModel> {
  $zod: typeof ZUserResponseModel;
  toJSON(data?: any): any;
}

