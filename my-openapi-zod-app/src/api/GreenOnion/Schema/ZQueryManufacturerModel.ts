//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
// @ts-nocheck
// eslint-disable @typescript-eslint/no-unused-vars

import { z } from "zod";

const ZQueryManufacturerModel = z.object({
    manufacturerId: z.number().int().nullish(),
    manufacturerName: z.string().nullish(),
    glnNumber: z.string().nullish(),
    isActive: z.boolean().nullish(),
    hasUsers: z.boolean().nullish(),
    userCount: z.number().int().nullish(),
    hasActiveUsers: z.boolean().nullish(),
    activeUserCount: z.number().int().nullish(),
    productCount: z.number().int().nullish(),
    hasOneWorldSync: z.boolean().nullish(),
    oneWorldSyncCount: z.number().int().nullish(),
    createdOn: z.string().nullish(),
    createdById: z.number().int().nullish(),
    createdBy: z.string().nullish(),
    updatedOn: z.string().nullish(),
    updatedById: z.number().int().nullish(),
    updatedBy: z.string().nullish(),
});

export default ZQueryManufacturerModel;