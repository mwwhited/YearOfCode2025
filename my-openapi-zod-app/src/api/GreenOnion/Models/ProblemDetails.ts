//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZProblemDetails from "../Schema/ZProblemDetails";
type ProblemDetails = z.infer<typeof ZProblemDetails>;
interface IProblemDetails extends ProblemDetails {
  $zod: typeof ZProblemDetails;
}
export type { ProblemDetails, IProblemDetails };
export { ZProblemDetails };