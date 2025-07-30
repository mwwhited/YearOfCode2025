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

const ZQueryIngredientModel = z.object({
    ingredientId: z.number().int().nullish().meta({'x-navigation-key':'True',}),  
    ingredientName: z.string().nullish().meta({}),  
    group: z.string().nullish().meta({}),  
    iocGroup: z.string().nullish().meta({}),  
});

export default ZQueryIngredientModel;