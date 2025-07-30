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
import ZOrderDirections from "./ZOrderDirections";

const ZQueryIngredientModelOrderBy = z.object({
    ingredientId: ZOrderDirections.nullish(),  
    ingredientName: ZOrderDirections.nullish(),  
    group: ZOrderDirections.nullish(),  
    iocGroup: ZOrderDirections.nullish(),  
});

export default ZQueryIngredientModelOrderBy;