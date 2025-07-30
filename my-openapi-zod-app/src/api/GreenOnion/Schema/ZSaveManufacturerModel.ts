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
    manufacturerId: z.number().int().meta({}).nullish(),  
    manufacturerName: z.string().meta({}).nullish(),  
    glnNumber: z.string().meta({}).nullish(),  
    isActive: z.boolean().meta({}).nullish(),  
});

export default ZSaveManufacturerModel;