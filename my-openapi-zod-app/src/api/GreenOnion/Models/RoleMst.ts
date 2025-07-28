//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZRoleMst from "../Schema/ZRoleMst";
type RoleMst = z.infer<typeof ZRoleMst>;
interface IRoleMst extends RoleMst {
  $zod: typeof ZRoleMst;
}
export type { RoleMst, IRoleMst };
export { ZRoleMst };