//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZSaveSchoolDistrictModel from "../Schema/ZSaveSchoolDistrictModel";
type SaveSchoolDistrictModel = z.infer<typeof ZSaveSchoolDistrictModel>;
interface ISaveSchoolDistrictModel extends SaveSchoolDistrictModel {
  $zod: typeof ZSaveSchoolDistrictModel;
}
export type { SaveSchoolDistrictModel, ISaveSchoolDistrictModel };
export { ZSaveSchoolDistrictModel };