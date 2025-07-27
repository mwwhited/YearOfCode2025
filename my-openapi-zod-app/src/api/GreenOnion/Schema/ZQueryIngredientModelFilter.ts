//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import { ZFilterParameter } from "./ZFilterParameter";

const ZQueryIngredientModelFilter = z.object({
    ingredientId:ZFilterParameter.optional(),
    ingredientName:ZFilterParameter.optional(),
    group:ZFilterParameter.optional(),
    iocGroup:ZFilterParameter.optional(),
});

export default ZQueryIngredientModelFilter;