//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZUserResponseModel from "../Schema/ZUserResponseModel";
type UserResponseModel = z.infer<typeof ZUserResponseModel>;
interface IUserResponseModel extends UserResponseModel {
  $zod: typeof ZUserResponseModel;
}
export type { UserResponseModel, IUserResponseModel };
export { ZUserResponseModel };