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
    ingredientId: z.number().int().nullish(),
    ingredientName: z.string().nullish(),
    group: z.string().nullish(),
    iocGroup: z.string().nullish(),
});

export default ZQueryIngredientModel;