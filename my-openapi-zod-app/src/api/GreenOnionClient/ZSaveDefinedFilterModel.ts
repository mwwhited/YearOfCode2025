//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZSaveDefinedFilterModel = z.object({
    definedFilterId:z.number().int().optional(),
    path:z.string().optional(),
    name:z.string().optional(),
    isActive:z.boolean().optional(),
    state:z.string().optional(),
});

