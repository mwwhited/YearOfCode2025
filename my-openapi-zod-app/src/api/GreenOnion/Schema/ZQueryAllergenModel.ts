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

const ZQueryAllergenModel = z.object({
    allergenId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    allergenName: z.string().nullish().meta({}),  
    allergenGroup: z.string().nullish().meta({}),  
});

export default ZQueryAllergenModel;