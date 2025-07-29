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
    eq: z.unknown().nullish(),
    neq: z.unknown().nullish(),
    in: z.array(z.unknown()).nullish(),
    gt: z.unknown().nullish(),
    gte: z.unknown().nullish(),
    lt: z.unknown().nullish(),
    lte: z.unknown().nullish(),
});

export default ZFilterParameter;