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
import ZFilterParameter from "./ZFilterParameter";

const ZQueryManufacturerModelFilter = z.object({
    manufacturerId: ZFilterParameter.nullish(),
    manufacturerName: ZFilterParameter.nullish(),
    glnNumber: ZFilterParameter.nullish(),
    isActive: ZFilterParameter.nullish(),
    hasUsers: ZFilterParameter.nullish(),
    userCount: ZFilterParameter.nullish(),
    hasActiveUsers: ZFilterParameter.nullish(),
    activeUserCount: ZFilterParameter.nullish(),
    productCount: ZFilterParameter.nullish(),
    hasOneWorldSync: ZFilterParameter.nullish(),
    oneWorldSyncCount: ZFilterParameter.nullish(),
    createdOn: ZFilterParameter.nullish(),
    createdById: ZFilterParameter.nullish(),
    createdBy: ZFilterParameter.nullish(),
    updatedOn: ZFilterParameter.nullish(),
    updatedById: ZFilterParameter.nullish(),
    updatedBy: ZFilterParameter.nullish(),
});

export default ZQueryManufacturerModelFilter;