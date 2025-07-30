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
    message: z.string().nullish().meta({}),  
    messageCode: z.string().nullish().meta({}),  
    context: z.string().nullish().meta({}),  
    metaData: z.unknown().nullish().meta({}),  
});

export default ZResultMessage;