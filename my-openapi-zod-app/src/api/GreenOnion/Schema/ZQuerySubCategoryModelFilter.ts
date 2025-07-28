//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";
import ZFilterParameter from "./ZFilterParameter";

const ZQuerySubCategoryModelFilter = z.object({
    subCategoryId: ZFilterParameter.optional(),
    categoryId: ZFilterParameter.optional(),
    subCategoryName: ZFilterParameter.optional(),
    subCategoryCode: ZFilterParameter.optional(),
    isActive: ZFilterParameter.optional(),
    createdOn: ZFilterParameter.optional(),
    createdById: ZFilterParameter.optional(),
    createdBy: ZFilterParameter.optional(),
    updatedOn: ZFilterParameter.optional(),
    updatedById: ZFilterParameter.optional(),
    updatedBy: ZFilterParameter.optional(),
});

export default ZQuerySubCategoryModelFilter;