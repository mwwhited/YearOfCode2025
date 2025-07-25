//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryManufacturerModelFilter } from "./ZQueryManufacturerModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryManufacturerModelFilter {
    $schema: typeof ZQueryManufacturerModelFilter;

    manufacturerId?: any | undefined; 
    manufacturerName?: any | undefined; 
    glnNumber?: any | undefined; 
    isActive?: any | undefined; 
    hasUsers?: any | undefined; 
    userCount?: any | undefined; 
    hasActiveUsers?: any | undefined; 
    activeUserCount?: any | undefined; 
    productCount?: any | undefined; 
    hasOneWorldSync?: any | undefined; 
    oneWorldSyncCount?: any | undefined; 
    createdOn?: any | undefined; 
    createdById?: any | undefined; 
    createdBy?: any | undefined; 
    updatedOn?: any | undefined; 
    updatedById?: any | undefined; 
    updatedBy?: any | undefined; 

    toJSON(data?: any) : any;
}
