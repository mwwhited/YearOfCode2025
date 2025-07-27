//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZProductUploadModel from "../Schema/ZProductUploadModel";
type ProductUploadModel = z.infer<typeof ZProductUploadModel>;
interface IProductUploadModel extends ProductUploadModel {
  $zod: typeof ZProductUploadModel;
}
export type { ProductUploadModel, IProductUploadModel };
export { ZProductUploadModel };