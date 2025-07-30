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

const ZBaseResponseModel = z.object({
    success: z.boolean().meta({}).nullish(),  
    message: z.string().meta({}).nullish(),  
    totalRecords: z.number().int().meta({}).nullish(),  
    payload: z.any().meta({}).nullish(),  
});

export default ZBaseResponseModel;