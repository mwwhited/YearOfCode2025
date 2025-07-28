//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZSuggestedProductRequestModel from "../Schema/ZSuggestedProductRequestModel";
type SuggestedProductRequestModel = z.infer<typeof ZSuggestedProductRequestModel>;
interface ISuggestedProductRequestModel extends SuggestedProductRequestModel {
  $zod: typeof ZSuggestedProductRequestModel;
}
export type { SuggestedProductRequestModel, ISuggestedProductRequestModel };
export { ZSuggestedProductRequestModel };