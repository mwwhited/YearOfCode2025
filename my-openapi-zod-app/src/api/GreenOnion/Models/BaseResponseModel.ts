//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZBaseResponseModel from "../Schema/ZBaseResponseModel";
type BaseResponseModel = z.infer<typeof ZBaseResponseModel>;
interface IBaseResponseModel extends BaseResponseModel {
  $zod: typeof ZBaseResponseModel;
}
export type { BaseResponseModel, IBaseResponseModel };
export { ZBaseResponseModel };