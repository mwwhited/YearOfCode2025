//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZOrderDirections from "../Schema/ZOrderDirections";
type OrderDirections = z.infer<typeof ZOrderDirections>;
interface IOrderDirections extends OrderDirections {
  $zod: typeof ZOrderDirections;
}
export type { OrderDirections, IOrderDirections };
export { ZOrderDirections };