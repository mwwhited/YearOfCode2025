//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

import ZMessageLevels from "../Schema/ZMessageLevels";
type MessageLevels = z.infer<typeof ZMessageLevels>;
interface IMessageLevels extends MessageLevels {
  $zod: typeof ZMessageLevels;
}
export type { MessageLevels, IMessageLevels };
export { ZMessageLevels };