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

const ZSaveIngredientModel = z.object({
    ingredientId: z.number().int().nullish().meta({}),  
    ingredientName: z.string().nullish().meta({}),  
    group: z.string().nullish().meta({}),  
    iocGroup: z.string().nullish().meta({}),  
});

export default ZSaveIngredientModel;