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

const ZProductCheck = z.object({
    ischeck: z.boolean().nullish().meta({}),  
    headerName: z.string().nullish().meta({}),  
    headerValue: z.string().nullish().meta({}),  
});

export default ZProductCheck;