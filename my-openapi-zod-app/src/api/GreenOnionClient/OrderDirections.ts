//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { IOrderDirections } from "./IOrderDirections";
import { ZOrderDirections } from "./ZOrderDirections";

export const OrderDirections = Object.fromEntries(
  ZOrderDirections.options.map((k) => [k, k])
) as { [K in IOrderDirections]: K };
(OrderDirections as any).$schema = ZOrderDirections;
