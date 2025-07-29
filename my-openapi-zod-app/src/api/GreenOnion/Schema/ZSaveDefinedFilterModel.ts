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
    definedFilterId: z.number().int().nullish(),
    path: z.string().nullish(),
    name: z.string().nullish(),
    isActive: z.boolean().nullish(),
    state: z.string().nullish(),
});

export default ZSaveDefinedFilterModel;