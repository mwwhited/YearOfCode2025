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
import ZFilterParameter from "./ZFilterParameter";

const ZQueryIngredientModelFilter = z.object({
    ingredientId: ZFilterParameter.nullish(),
    ingredientName: ZFilterParameter.nullish(),
    group: ZFilterParameter.nullish(),
    iocGroup: ZFilterParameter.nullish(),
});

export default ZQueryIngredientModelFilter;