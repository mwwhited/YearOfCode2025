//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryDefinedFilterModelOrderBy } from "./ZQueryDefinedFilterModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryDefinedFilterModelOrderBy {
    $schema: typeof ZQueryDefinedFilterModelOrderBy;

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
