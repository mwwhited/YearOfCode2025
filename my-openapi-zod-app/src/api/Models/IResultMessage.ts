//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import type { z } from "zod";
import { ZResultMessage } from "../Schema/ZResultMessage";
import type { IMessageLevels } from "./IMessageLevels";


export interface IResultMessage extends z.infer<typeof ZResultMessage> {
  $zod: typeof ZResultMessage;
  toJSON(data?: any): any;
}

