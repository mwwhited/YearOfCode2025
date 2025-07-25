//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

import type { IMessageLevels } from "./IMessageLevels";


export const ZMessageLevels = z.enum([
    "trace",
    "debug",
    "info",
    "warning",
    "error",
    "fatal",
    "unknown",
]);
/*
[class, MessageLevels],[interface, IMessageLevels],[schema, ZMessageLevels],[definition, {
        "enum": [
          "trace",
          "debug",
          "info",
          "warning",
          "error",
          "fatal",
          "unknown"
        ],
        "type": "string",
        "description": "response message level"
      }]
*/
