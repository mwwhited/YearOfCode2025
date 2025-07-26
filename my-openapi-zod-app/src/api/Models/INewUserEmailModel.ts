//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZNewUserEmailModel } from "../Schema/ZNewUserEmailModel";


export interface INewUserEmailModel extends z.infer<typeof ZNewUserEmailModel> {
  $zod: typeof ZNewUserEmailModel;
  toJSON(data?: any): any;
}

