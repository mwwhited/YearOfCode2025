//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { IMessageLevels } from "./IMessageLevels";
import { ZMessageLevels } from "../Schema/ZMessageLevels";

export const MessageLevels = Object.fromEntries(
  ZMessageLevels.options.map((k) => [k, k])
) as { [K in IMessageLevels]: K };
(MessageLevels as any).$schema = ZMessageLevels;
