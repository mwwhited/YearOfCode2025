//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZFileUploadResponse from "../Schema/ZFileUploadResponse";
type FileUploadResponse = z.infer<typeof ZFileUploadResponse>;
interface IFileUploadResponse extends FileUploadResponse {
  $zod: typeof ZFileUploadResponse;
}
export type { FileUploadResponse, IFileUploadResponse };
export { ZFileUploadResponse };