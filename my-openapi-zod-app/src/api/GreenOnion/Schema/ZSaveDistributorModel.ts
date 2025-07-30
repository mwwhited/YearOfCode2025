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

const ZSaveDistributorModel = z.object({
    distributorId: z.number().int().meta({}).nullish(),  
    distributorName: z.string().meta({}).nullish(),  
    distributorCode: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
});

export default ZSaveDistributorModel;