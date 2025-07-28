//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";
import ZOrderDirections from "./ZOrderDirections";

const ZQueryIngredientModelOrderBy = z.object({
    ingredientId: ZOrderDirections.optional(),
    ingredientName: ZOrderDirections.optional(),
    group: ZOrderDirections.optional(),
    iocGroup: ZOrderDirections.optional(),
});

export default ZQueryIngredientModelOrderBy;