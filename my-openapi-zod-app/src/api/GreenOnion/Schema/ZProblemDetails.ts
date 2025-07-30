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
    type: z.string().meta({}).nullish(),  
    title: z.string().meta({}).nullish(),  
    status: z.number().int().meta({}).nullish(),  
    detail: z.string().meta({}).nullish(),  
    instance: z.string().meta({}).nullish(),  
});

export default ZProblemDetails;