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
    ingredientId: z.number().int().meta({'x-navigation-key':'True',}).nullish(),  
    ingredientName: z.string().meta({}).nullish(),  
    group: z.string().meta({}).nullish(),  
    iocGroup: z.string().meta({}).nullish(),  
});

export default ZQueryIngredientModel;