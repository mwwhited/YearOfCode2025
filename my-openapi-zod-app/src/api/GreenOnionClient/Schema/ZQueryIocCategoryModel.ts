//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZQueryIocCategoryModel = z.object({
    iocCategoryId:z.number().int().optional(),
    name:z.string().optional(),
    color:z.string().optional(),
});
