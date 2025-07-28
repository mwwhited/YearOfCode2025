//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
//
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from "zod";
import ZOrderDirections from "./ZOrderDirections";

const ZQueryManufacturerModelOrderBy = z.object({
    manufacturerId: ZOrderDirections.optional(),
    manufacturerName: ZOrderDirections.optional(),
    glnNumber: ZOrderDirections.optional(),
    isActive: ZOrderDirections.optional(),
    hasUsers: ZOrderDirections.optional(),
    userCount: ZOrderDirections.optional(),
    hasActiveUsers: ZOrderDirections.optional(),
    activeUserCount: ZOrderDirections.optional(),
    productCount: ZOrderDirections.optional(),
    hasOneWorldSync: ZOrderDirections.optional(),
    oneWorldSyncCount: ZOrderDirections.optional(),
    createdOn: ZOrderDirections.optional(),
    createdById: ZOrderDirections.optional(),
    createdBy: ZOrderDirections.optional(),
    updatedOn: ZOrderDirections.optional(),
    updatedById: ZOrderDirections.optional(),
    updatedBy: ZOrderDirections.optional(),
});

export default ZQueryManufacturerModelOrderBy;