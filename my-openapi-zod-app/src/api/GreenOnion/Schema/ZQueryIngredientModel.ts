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
    ingredientId: z.number().int().optional(),
    ingredientName: z.string().optional(),
    group: z.string().optional(),
    iocGroup: z.string().optional(),
});

export default ZQueryIngredientModel;