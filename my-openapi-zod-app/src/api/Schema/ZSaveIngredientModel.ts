//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";

export const ZSaveIngredientModel = z.object({
    ingredientId:z.number().int().optional(),
    ingredientName:z.string().optional(),
    group:z.string().optional(),
    iocGroup:z.string().optional(),
});
