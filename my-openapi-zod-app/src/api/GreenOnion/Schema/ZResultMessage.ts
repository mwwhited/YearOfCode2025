//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

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