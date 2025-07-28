//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZContentReference from "../Schema/ZContentReference";
type ContentReference = z.infer<typeof ZContentReference>;
interface IContentReference extends ContentReference {
  $zod: typeof ZContentReference;
}
export type { ContentReference, IContentReference };
export { ZContentReference };