//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZSaveOneWorldSyncProductModel } from "../Schema/ZSaveOneWorldSyncProductModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";


export interface ISaveOneWorldSyncProductModel extends z.infer<typeof ZSaveOneWorldSyncProductModel> {
  $zod: typeof ZSaveOneWorldSyncProductModel;
  toJSON(data?: any): any;
}

