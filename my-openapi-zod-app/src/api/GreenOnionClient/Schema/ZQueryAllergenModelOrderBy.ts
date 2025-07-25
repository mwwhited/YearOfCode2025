//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryAllergenModelOrderBy = z.object({
    allergenId:ZOrderDirections.optional(),
    allergenName:ZOrderDirections.optional(),
    allergenGroup:ZOrderDirections.optional(),
});
