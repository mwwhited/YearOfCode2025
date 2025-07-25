//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZSaveAllergenModel = z.object({
    allergenId:z.number().int().optional(),
    allergenName:z.string().optional(),
    allergenGroup:z.string().optional(),
});

