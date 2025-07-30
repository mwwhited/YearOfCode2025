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
    success: z.boolean().nullish().meta({}),  
    message: z.string().nullish().meta({}),  
    totalRecords: z.number().int().nullish().meta({}),  
    payload: z.unknown().nullish().meta({}),  
});

export default ZBaseResponseModel;