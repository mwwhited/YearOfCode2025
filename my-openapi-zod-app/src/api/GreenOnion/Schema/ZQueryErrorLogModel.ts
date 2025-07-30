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

const ZQueryErrorLogModel = z.object({
    errorLogId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    errorMessage: z.string().meta({}).nullish(),  
    errorPath: z.string().meta({}).nullish(),  
});

export default ZQueryErrorLogModel;