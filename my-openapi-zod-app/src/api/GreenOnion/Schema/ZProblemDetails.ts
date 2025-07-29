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
    type: z.string().nullish(),
    title: z.string().nullish(),
    status: z.number().int().nullish(),
    detail: z.string().nullish(),
    instance: z.string().nullish(),
});

export default ZProblemDetails;