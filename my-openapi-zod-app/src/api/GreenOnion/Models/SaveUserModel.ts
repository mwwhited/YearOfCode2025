//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZSaveUserModel from "../Schema/ZSaveUserModel";
type SaveUserModel = z.infer<typeof ZSaveUserModel>;
interface ISaveUserModel extends SaveUserModel {
  $zod: typeof ZSaveUserModel;
}
export type { SaveUserModel, ISaveUserModel };
export { ZSaveUserModel };