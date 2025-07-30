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

const ZProductUpcAllocationModel = z.object({
    productId: z.number().int().nullish().meta({}),  
    upc: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    createdBy: z.number().int().nullish().meta({}),  
});

export default ZProductUpcAllocationModel;