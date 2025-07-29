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

const ZBaseResponseModel = z.object({
    success: z.boolean().nullish(),
    message: z.string().nullish(),
    totalRecords: z.number().int().nullish(),
    payload: z.unknown().nullish(),
});

export default ZBaseResponseModel;