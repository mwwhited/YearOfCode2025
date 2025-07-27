//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZFileStatus from "../Schema/ZFileStatus";
type FileStatus = z.infer<typeof ZFileStatus>;
interface IFileStatus extends FileStatus {
  $zod: typeof ZFileStatus;
}
export type { FileStatus, IFileStatus };
export { ZFileStatus };