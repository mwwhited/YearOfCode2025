//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZMappingFieldData } from "../Schema/ZMappingFieldData";


export interface IMappingFieldData extends z.infer<typeof ZMappingFieldData> {
  $zod: typeof ZMappingFieldData;
  toJSON(data?: any): any;
}

