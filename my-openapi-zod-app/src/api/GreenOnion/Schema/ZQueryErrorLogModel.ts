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

const ZQueryErrorLogModel = z.object({
    errorLogId: z.number().int().optional(),
    errorMessage: z.string().optional(),
    errorPath: z.string().optional(),
});

export default ZQueryErrorLogModel;