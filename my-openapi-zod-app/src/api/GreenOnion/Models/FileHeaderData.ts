//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZFileHeaderData from "../Schema/ZFileHeaderData";
type FileHeaderData = z.infer<typeof ZFileHeaderData>;
interface IFileHeaderData extends FileHeaderData {
  $zod: typeof ZFileHeaderData;
}
export type { FileHeaderData, IFileHeaderData };
export { ZFileHeaderData };