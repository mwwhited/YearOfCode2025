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
    ingredientId: z.number().int().meta({}).nullish(),  
    ingredientName: z.string().meta({}).nullish(),  
    group: z.string().meta({}).nullish(),  
    iocGroup: z.string().meta({}).nullish(),
    description: z.string().meta({}).nullish(),
    allergenId: z.number().int().meta({}).nullish(),
    isOrganic: z.boolean().meta({}).nullish(),
    isGMOFree: z.boolean().meta({}).nullish(),
    nutritionalInfo: z.string().meta({}).nullish(),
});

export default ZSaveIngredientModel;