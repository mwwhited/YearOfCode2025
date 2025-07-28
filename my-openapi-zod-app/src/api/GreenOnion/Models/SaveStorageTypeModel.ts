//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZSaveStorageTypeModel from "../Schema/ZSaveStorageTypeModel";
type SaveStorageTypeModel = z.infer<typeof ZSaveStorageTypeModel>;
interface ISaveStorageTypeModel extends SaveStorageTypeModel {
  $zod: typeof ZSaveStorageTypeModel;
}
export type { SaveStorageTypeModel, ISaveStorageTypeModel };
export { ZSaveStorageTypeModel };