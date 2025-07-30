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

const ZSaveManufacturerModel = z.object({
    manufacturerId: z.number().int().nullish().meta({}),  
    manufacturerName: z.string().nullish().meta({}),  
    glnNumber: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
});

export default ZSaveManufacturerModel;