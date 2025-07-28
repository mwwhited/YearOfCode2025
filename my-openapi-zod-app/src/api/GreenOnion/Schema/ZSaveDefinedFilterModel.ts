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

const ZSaveDefinedFilterModel = z.object({
    definedFilterId: z.number().int().optional(),
    path: z.string().optional(),
    name: z.string().optional(),
    isActive: z.boolean().optional(),
    state: z.string().optional(),
});

export default ZSaveDefinedFilterModel;