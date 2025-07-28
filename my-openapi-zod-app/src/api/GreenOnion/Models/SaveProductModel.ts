//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZSaveProductModel from "../Schema/ZSaveProductModel";
type SaveProductModel = z.infer<typeof ZSaveProductModel>;
interface ISaveProductModel extends SaveProductModel {
  $zod: typeof ZSaveProductModel;
}
export type { SaveProductModel, ISaveProductModel };
export { ZSaveProductModel };