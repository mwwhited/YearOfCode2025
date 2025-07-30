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

const ZContentReference = z.object({
    content: z.string().nullish().meta({}),  
    contentType: z.string().nullish().meta({}),  
    fileName: z.string().nullish().meta({}),  
});

export default ZContentReference;