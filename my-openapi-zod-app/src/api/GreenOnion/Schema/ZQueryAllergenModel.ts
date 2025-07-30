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
    allergenId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    allergenName: z.string().meta({}).nullish(),  
    allergenGroup: z.string().meta({}).nullish(),  
});

export default ZQueryAllergenModel;