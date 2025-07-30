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
    content: z.string().meta({}).nullish(),  
    contentType: z.string().meta({}).nullish(),  
    fileName: z.string().meta({}).nullish(),  
});

export default ZContentReference;