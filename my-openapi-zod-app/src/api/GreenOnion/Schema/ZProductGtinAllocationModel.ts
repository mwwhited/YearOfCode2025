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

const ZProductGtinAllocationModel = z.object({
    productId: z.number().int().nullish().meta({}),  
    gtin: z.string().nullish().meta({}),  
    isActive: z.boolean().nullish().meta({}),  
    createdBy: z.number().int().nullish().meta({}),  
});

export default ZProductGtinAllocationModel;