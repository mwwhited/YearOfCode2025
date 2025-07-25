//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZSaveSubCategoryModel = z.object({
    subCategoryId:z.number().int().optional(),
    categoryId:z.number().int().optional(),
    subCategoryName:z.string().optional(),
    subCategoryCode:z.string().optional(),
    isActive:z.boolean().optional(),
});
