//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZFileUploadResponse from "../Schema/ZFileUploadResponse";
type FileUploadResponse = z.infer<typeof ZFileUploadResponse>;
interface IFileUploadResponse extends FileUploadResponse {
  $zod: typeof ZFileUploadResponse;
}
export type { FileUploadResponse, IFileUploadResponse };
export { ZFileUploadResponse };