//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { z } from "zod";

import ZResultMessage from "../Schema/ZResultMessage";
type ResultMessage = z.infer<typeof ZResultMessage>;
interface IResultMessage extends ResultMessage {
  $zod: typeof ZResultMessage;
}
export type { ResultMessage, IResultMessage };
export { ZResultMessage };