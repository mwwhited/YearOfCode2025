//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";

const ZSaveIngredientModel = z.object({
    ingredientId: z.number().int().optional(),
    ingredientName: z.string().optional(),
    group: z.string().optional(),
    iocGroup: z.string().optional(),
});

export default ZSaveIngredientModel;