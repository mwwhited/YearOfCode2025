//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZProductCheck from "../Schema/ZProductCheck";
type ProductCheck = z.infer<typeof ZProductCheck>;
interface IProductCheck extends ProductCheck {
  $zod: typeof ZProductCheck;
}
export type { ProductCheck, IProductCheck };
export { ZProductCheck };