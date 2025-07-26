//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZProductTableField } from "../Schema/ZProductTableField";


export interface IProductTableField extends z.infer<typeof ZProductTableField> {
  $zod: typeof ZProductTableField;
  toJSON(data?: any): any;
}

