//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQueryUserModelOrderBy } from "./ZQueryUserModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQueryUserModelOrderBy {
    $schema: typeof ZQueryUserModelOrderBy;

    userId?: any | undefined; 
    isActive?: any | undefined; 
    firstName?: any | undefined; 
    lastName?: any | undefined; 
    objectId?: any | undefined; 
    email?: any | undefined; 
    mobile?: any | undefined; 
    profileImage?: any | undefined; 
    coverImage?: any | undefined; 
    addressLine1?: any | undefined; 
    addressLine2?: any | undefined; 
    city?: any | undefined; 
    country?: any | undefined; 
    zipCode?: any | undefined; 
    stateId?: any | undefined; 
    state?: any | undefined; 
    roleId?: any | undefined; 
    roleName?: any | undefined; 
    schoolDistrictId?: any | undefined; 
    schoolDistrictName?: any | undefined; 
    manufacturerId?: any | undefined; 
    manufacturerName?: any | undefined; 
    createdOn?: any | undefined; 
    createdById?: any | undefined; 
    createdBy?: any | undefined; 
    updatedOn?: any | undefined; 
    updatedById?: any | undefined; 
    updatedBy?: any | undefined; 

    toJSON(data?: any) : any;
}
