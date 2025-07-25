//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZQueryErrorLogModel = z.object({
    errorLogId:z.number().int().optional(),
    errorMessage:z.string().optional(),
    errorPath:z.string().optional(),
});

