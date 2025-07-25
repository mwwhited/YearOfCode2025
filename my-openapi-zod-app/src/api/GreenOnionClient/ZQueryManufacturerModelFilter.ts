//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryManufacturerModelFilter = z.object({
    manufacturerId:ZFilterParameter.optional(),
    manufacturerName:ZFilterParameter.optional(),
    glnNumber:ZFilterParameter.optional(),
    isActive:ZFilterParameter.optional(),
    hasUsers:ZFilterParameter.optional(),
    userCount:ZFilterParameter.optional(),
    hasActiveUsers:ZFilterParameter.optional(),
    activeUserCount:ZFilterParameter.optional(),
    productCount:ZFilterParameter.optional(),
    hasOneWorldSync:ZFilterParameter.optional(),
    oneWorldSyncCount:ZFilterParameter.optional(),
    createdOn:ZFilterParameter.optional(),
    createdById:ZFilterParameter.optional(),
    createdBy:ZFilterParameter.optional(),
    updatedOn:ZFilterParameter.optional(),
    updatedById:ZFilterParameter.optional(),
    updatedBy:ZFilterParameter.optional(),
});

