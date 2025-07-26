//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZNutritionalInformationModel } from "../Schema/ZNutritionalInformationModel";


export interface INutritionalInformationModel extends z.infer<typeof ZNutritionalInformationModel> {
  $zod: typeof ZNutritionalInformationModel;
  toJSON(data?: any): any;
}

