//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryManufacturerModel } from "./ZQueryManufacturerModel";

type integer = number;

export interface IQueryManufacturerModel {
    $schema: typeof ZQueryManufacturerModel;

    manufacturerId?: integer | undefined; 
    manufacturerName?: string | undefined; 
    glnNumber?: string | undefined; 
    isActive?: boolean | undefined; 
    hasUsers?: boolean | undefined; 
    userCount?: integer | undefined; 
    hasActiveUsers?: boolean | undefined; 
    activeUserCount?: integer | undefined; 
    productCount?: integer | undefined; 
    hasOneWorldSync?: boolean | undefined; 
    oneWorldSyncCount?: integer | undefined; 
    createdOn?: string | undefined; 
    createdById?: integer | undefined; 
    createdBy?: string | undefined; 
    updatedOn?: string | undefined; 
    updatedById?: integer | undefined; 
    updatedBy?: string | undefined; 

    toJSON(data?: any) : any;
}
