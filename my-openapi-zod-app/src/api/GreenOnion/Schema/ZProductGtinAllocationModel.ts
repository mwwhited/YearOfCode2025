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
    productId: z.number().int().optional(),
    gtin: z.string().optional(),
    isActive: z.boolean().optional(),
    createdBy: z.number().int().optional(),
});

export default ZProductGtinAllocationModel;