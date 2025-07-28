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

const ZSaveAllergenModel = z.object({
    allergenId: z.number().int().optional(),
    allergenName: z.string().optional(),
    allergenGroup: z.string().optional(),
});

export default ZSaveAllergenModel;