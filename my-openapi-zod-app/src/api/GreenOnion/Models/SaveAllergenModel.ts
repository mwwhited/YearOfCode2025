//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZSaveAllergenModel from "../Schema/ZSaveAllergenModel";
type SaveAllergenModel = z.infer<typeof ZSaveAllergenModel>;
interface ISaveAllergenModel extends SaveAllergenModel {
  $zod: typeof ZSaveAllergenModel;
}
export type { SaveAllergenModel, ISaveAllergenModel };
export { ZSaveAllergenModel };