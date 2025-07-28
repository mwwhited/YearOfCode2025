//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZProductResponse from "../Schema/ZProductResponse";
type ProductResponse = z.infer<typeof ZProductResponse>;
interface IProductResponse extends ProductResponse {
  $zod: typeof ZProductResponse;
}
export type { ProductResponse, IProductResponse };
export { ZProductResponse };