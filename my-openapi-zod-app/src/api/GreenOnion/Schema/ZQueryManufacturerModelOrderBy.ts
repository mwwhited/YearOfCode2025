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
import ZOrderDirections from "./ZOrderDirections";

const ZQueryManufacturerModelOrderBy = z.object({
    manufacturerId: ZOrderDirections.nullish(),  
    manufacturerName: ZOrderDirections.nullish(),  
    glnNumber: ZOrderDirections.nullish(),  
    isActive: ZOrderDirections.nullish(),  
    hasUsers: ZOrderDirections.nullish(),  
    userCount: ZOrderDirections.nullish(),  
    hasActiveUsers: ZOrderDirections.nullish(),  
    activeUserCount: ZOrderDirections.nullish(),  
    productCount: ZOrderDirections.nullish(),  
    hasOneWorldSync: ZOrderDirections.nullish(),  
    oneWorldSyncCount: ZOrderDirections.nullish(),  
    createdOn: ZOrderDirections.nullish(),  
    createdById: ZOrderDirections.nullish(),  
    createdBy: ZOrderDirections.nullish(),  
    updatedOn: ZOrderDirections.nullish(),  
    updatedById: ZOrderDirections.nullish(),  
    updatedBy: ZOrderDirections.nullish(),  
});

export default ZQueryManufacturerModelOrderBy;