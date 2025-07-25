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

export const ZQuerySubCategoryModelOrderBy = z.object({
    subCategoryId:ZOrderDirections.optional(),
    categoryId:ZOrderDirections.optional(),
    subCategoryName:ZOrderDirections.optional(),
    subCategoryCode:ZOrderDirections.optional(),
    isActive:ZOrderDirections.optional(),
    createdOn:ZOrderDirections.optional(),
    createdById:ZOrderDirections.optional(),
    createdBy:ZOrderDirections.optional(),
    updatedOn:ZOrderDirections.optional(),
    updatedById:ZOrderDirections.optional(),
    updatedBy:ZOrderDirections.optional(),
});

