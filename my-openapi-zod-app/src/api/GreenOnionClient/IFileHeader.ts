//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZFileHeader } from "./ZFileHeader";


export interface IFileHeader extends z.infer<typeof ZFileHeader> {
  $zod: typeof ZFileHeader;
  toJSON(data?: any): any;
}

