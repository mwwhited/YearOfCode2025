//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZSaveDistributorModel from "../Schema/ZSaveDistributorModel";
type SaveDistributorModel = z.infer<typeof ZSaveDistributorModel>;
interface ISaveDistributorModel extends SaveDistributorModel {
  $zod: typeof ZSaveDistributorModel;
}
export type { SaveDistributorModel, ISaveDistributorModel };
export { ZSaveDistributorModel };