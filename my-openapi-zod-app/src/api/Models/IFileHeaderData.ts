//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZFileHeaderData } from "../Schema/ZFileHeaderData";


export interface IFileHeaderData extends z.infer<typeof ZFileHeaderData> {
  $zod: typeof ZFileHeaderData;
  toJSON(data?: any): any;
}

