//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSelectProductSaveCheckListRequestModel } from "../Schema/ZSelectProductSaveCheckListRequestModel";
import type { IProductCheck } from "./IProductCheck";


export interface ISelectProductSaveCheckListRequestModel extends z.infer<typeof ZSelectProductSaveCheckListRequestModel> {
  $zod: typeof ZSelectProductSaveCheckListRequestModel;
  toJSON(data?: any): any;
}

