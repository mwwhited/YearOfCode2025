//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDefinedFilterModelFilter } from "./ZQueryDefinedFilterModelFilter";
import type { IFilterParameter } from "./IFilterParameter";

type integer = number;

export interface IQueryDefinedFilterModelFilter {
    $schema: typeof ZQueryDefinedFilterModelFilter;

    definedFilterId?: any | undefined; 
    createById?: any | undefined; 
    updatedOn?: any | undefined; 
    updatedById?: any | undefined; 
    updatedBy?: any | undefined; 
    createBy?: any | undefined; 
    path?: any | undefined; 
    name?: any | undefined; 
    isActive?: any | undefined; 
    createdOn?: any | undefined; 
    state?: any | undefined; 

    toJSON(data?: any) : any;
}
