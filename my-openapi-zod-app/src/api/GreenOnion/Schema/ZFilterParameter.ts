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

const ZFilterParameter = z.object({
    eq: z.unknown().nullish().meta({}),  
    neq: z.unknown().nullish().meta({}),  
    in: z.array(z.unknown()).nullish().meta({}),  
    gt: z.unknown().nullish().meta({}),  
    gte: z.unknown().nullish().meta({}),  
    lt: z.unknown().nullish().meta({}),  
    lte: z.unknown().nullish().meta({}),  
});

export default ZFilterParameter;