//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZQueryIngredientModel = z.object({
    ingredientId: z.number().int().optional(),
    ingredientName: z.string().optional(),
    group: z.string().optional(),
    iocGroup: z.string().optional(),
});

export default ZQueryIngredientModel;