//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZQueryCategoryModel = z.object({
    categoryId: z.number().int().optional(),
    categoryName: z.string().optional(),
    categoryCode: z.string().optional(),
    isActive: z.boolean().optional(),
    createdOn: z.string().optional(),
    createdById: z.number().int().optional(),
    createdBy: z.string().optional(),
    updatedOn: z.string().optional(),
    updatedById: z.number().int().optional(),
    updatedBy: z.string().optional(),
});

export default ZQueryCategoryModel;