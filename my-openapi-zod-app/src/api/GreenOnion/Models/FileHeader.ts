//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZFileHeader from "../Schema/ZFileHeader";
type FileHeader = z.infer<typeof ZFileHeader>;
interface IFileHeader extends FileHeader {
  $zod: typeof ZFileHeader;
}
export type { FileHeader, IFileHeader };
export { ZFileHeader };