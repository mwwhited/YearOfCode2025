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
    eq: z.any().nullish().meta({}),  
    neq: z.any().nullish().meta({}),  
    in: z.array(z.any()).nullish().meta({}),  
    gt: z.any().nullish().meta({}),  
    gte: z.any().nullish().meta({}),  
    lt: z.any().nullish().meta({}),  
    lte: z.any().nullish().meta({}),  
});

export default ZFilterParameter;