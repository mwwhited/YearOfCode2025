//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZFileStatus from "../Schema/ZFileStatus";
type FileStatus = z.infer<typeof ZFileStatus>;
interface IFileStatus extends FileStatus {
  $zod: typeof ZFileStatus;
}
export type { FileStatus, IFileStatus };
export { ZFileStatus };