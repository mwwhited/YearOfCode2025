//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZNewUserEmailModel from "../Schema/ZNewUserEmailModel";
type NewUserEmailModel = z.infer<typeof ZNewUserEmailModel>;
interface INewUserEmailModel extends NewUserEmailModel {
  $zod: typeof ZNewUserEmailModel;
}
export type { NewUserEmailModel, INewUserEmailModel };
export { ZNewUserEmailModel };