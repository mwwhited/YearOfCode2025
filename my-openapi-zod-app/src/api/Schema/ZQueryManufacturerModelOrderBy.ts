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

export const ZQueryManufacturerModelOrderBy = z.object({
    manufacturerId:ZOrderDirections.optional(),
    manufacturerName:ZOrderDirections.optional(),
    glnNumber:ZOrderDirections.optional(),
    isActive:ZOrderDirections.optional(),
    hasUsers:ZOrderDirections.optional(),
    userCount:ZOrderDirections.optional(),
    hasActiveUsers:ZOrderDirections.optional(),
    activeUserCount:ZOrderDirections.optional(),
    productCount:ZOrderDirections.optional(),
    hasOneWorldSync:ZOrderDirections.optional(),
    oneWorldSyncCount:ZOrderDirections.optional(),
    createdOn:ZOrderDirections.optional(),
    createdById:ZOrderDirections.optional(),
    createdBy:ZOrderDirections.optional(),
    updatedOn:ZOrderDirections.optional(),
    updatedById:ZOrderDirections.optional(),
    updatedBy:ZOrderDirections.optional(),
});
