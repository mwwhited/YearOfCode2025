//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";

export const ZQueryManufacturerModel = z.object({
    manufacturerId:z.number().int().optional(),
    manufacturerName:z.string().optional(),
    glnNumber:z.string().optional(),
    isActive:z.boolean().optional(),
    hasUsers:z.boolean().optional(),
    userCount:z.number().int().optional(),
    hasActiveUsers:z.boolean().optional(),
    activeUserCount:z.number().int().optional(),
    productCount:z.number().int().optional(),
    hasOneWorldSync:z.boolean().optional(),
    oneWorldSyncCount:z.number().int().optional(),
    createdOn:z.string().optional(),
    createdById:z.number().int().optional(),
    createdBy:z.string().optional(),
    updatedOn:z.string().optional(),
    updatedById:z.number().int().optional(),
    updatedBy:z.string().optional(),
});

