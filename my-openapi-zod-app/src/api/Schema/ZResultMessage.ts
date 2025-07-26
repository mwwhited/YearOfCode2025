//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";
import { ZMessageLevels } from "./ZMessageLevels";

export const ZResultMessage = z.object({
    level:ZMessageLevels.optional(),
    message:z.string().optional().describe(`Simple English message about issue.`),
    messageCode:z.string().optional().describe(`unique code that may be used to assist in translating issue`),
    context:z.string().optional().describe(`Property or path related to this message`),
    metaData:z.unknown().optional().describe(`additional properties related to response`),
});
