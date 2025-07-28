//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZNutritionalInformationModel from "../Schema/ZNutritionalInformationModel";
type NutritionalInformationModel = z.infer<typeof ZNutritionalInformationModel>;
interface INutritionalInformationModel extends NutritionalInformationModel {
  $zod: typeof ZNutritionalInformationModel;
}
export type { NutritionalInformationModel, INutritionalInformationModel };
export { ZNutritionalInformationModel };