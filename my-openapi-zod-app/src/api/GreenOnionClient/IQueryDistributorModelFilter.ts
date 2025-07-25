//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDistributorModelFilter } from "./ZQueryDistributorModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryDistributorModelFilter {
    $schema: typeof ZQueryDistributorModelFilter;

    distributorId?: any | undefined; 
    distributorName?: any | undefined; 
    distributorCode?: any | undefined; 
    isActive?: any | undefined; 
    createdOn?: any | undefined; 
    createdById?: any | undefined; 
    createdBy?: any | undefined; 
    updatedOn?: any | undefined; 
    updatedById?: any | undefined; 
    updatedBy?: any | undefined; 

    toJSON(data?: any) : any;
}
