//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZFileUploadResponse } from "./ZFileUploadResponse";
import type { IMappingFieldData } from "./IMappingFieldData";
import type { IFileHeader } from "./IFileHeader";
import type { IFileHeaderData } from "./IFileHeaderData";
import type { IProductUploadModel } from "./IProductUploadModel";
import type { IProductTableField } from "./IProductTableField";
import type { IFileStatus } from "./IFileStatus";


export interface IFileUploadResponse extends z.infer<typeof ZFileUploadResponse> {
  $zod: typeof ZFileUploadResponse;
  toJSON(data?: any): any;
}

