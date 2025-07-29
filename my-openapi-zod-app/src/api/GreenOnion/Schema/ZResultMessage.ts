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
    level: ZMessageLevels.nullish(),
    message: z.string().nullish(),
    messageCode: z.string().nullish(),
    context: z.string().nullish(),
    metaData: z.unknown().nullish(),
});

export default ZResultMessage;