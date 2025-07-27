//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZRoleMst from "../Schema/ZRoleMst";
type RoleMst = z.infer<typeof ZRoleMst>;
interface IRoleMst extends RoleMst {
  $zod: typeof ZRoleMst;
}
export type { RoleMst, IRoleMst };
export { ZRoleMst };