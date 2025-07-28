//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";
import ZMessageLevels from "./ZMessageLevels";

const ZResultMessage = z.object({
    level: ZMessageLevels.optional(),
    message: z.string().optional(),
    messageCode: z.string().optional(),
    context: z.string().optional(),
    metaData: z.unknown().optional(),
});

export default ZResultMessage;