//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQueryDefinedFilterModelOrderBy = z.object({
    definedFilterId:ZOrderDirections.optional(),
    createById:ZOrderDirections.optional(),
    updatedOn:ZOrderDirections.optional(),
    updatedById:ZOrderDirections.optional(),
    updatedBy:ZOrderDirections.optional(),
    createBy:ZOrderDirections.optional(),
    path:ZOrderDirections.optional(),
    name:ZOrderDirections.optional(),
    isActive:ZOrderDirections.optional(),
    createdOn:ZOrderDirections.optional(),
    state:ZOrderDirections.optional(),
});
