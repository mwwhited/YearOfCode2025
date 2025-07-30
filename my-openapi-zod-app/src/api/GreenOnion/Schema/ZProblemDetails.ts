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

const ZProblemDetails = z.object({
    type: z.string().nullish().meta({}),  
    title: z.string().nullish().meta({}),  
    status: z.number().int().nullish().meta({}),  
    detail: z.string().nullish().meta({}),  
    instance: z.string().nullish().meta({}),  
});

export default ZProblemDetails;