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
    distributorId: z.number().int().nullish().meta({}),  
    distributorName: z.string().nullish().meta({}),  
    distributorCode: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
});

export default ZSaveDistributorModel;