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
    eq: z.any().meta({}).nullish(),  
    neq: z.any().meta({}).nullish(),  
    in: z.array(z.any()).meta({}).nullish(),  
    gt: z.any().meta({}).nullish(),  
    gte: z.any().meta({}).nullish(),  
    lt: z.any().meta({}).nullish(),  
    lte: z.any().meta({}).nullish(),  
});

export default ZFilterParameter;