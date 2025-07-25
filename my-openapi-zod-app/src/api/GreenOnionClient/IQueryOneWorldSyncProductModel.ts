//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryOneWorldSyncProductModel } from "./ZQueryOneWorldSyncProductModel";
import type { INutritionalInformationModel } from "./INutritionalInformationModel";


export interface IQueryOneWorldSyncProductModel extends z.infer<typeof ZQueryOneWorldSyncProductModel> {
  $zod: typeof ZQueryOneWorldSyncProductModel;
  toJSON(data?: any): any;
}

