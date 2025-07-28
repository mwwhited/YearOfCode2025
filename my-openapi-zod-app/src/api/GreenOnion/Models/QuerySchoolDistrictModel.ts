//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZQuerySchoolDistrictModel from "../Schema/ZQuerySchoolDistrictModel";
type QuerySchoolDistrictModel = z.infer<typeof ZQuerySchoolDistrictModel>;
interface IQuerySchoolDistrictModel extends QuerySchoolDistrictModel {
  $zod: typeof ZQuerySchoolDistrictModel;
}
export type { QuerySchoolDistrictModel, IQuerySchoolDistrictModel };
export { ZQuerySchoolDistrictModel };