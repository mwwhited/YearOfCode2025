//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZSaveUserModel } from "./ZSaveUserModel";

type integer = number;

export interface ISaveUserModel {
    $schema: typeof ZSaveUserModel;

    userId?: integer | undefined; 
    isActive?: boolean | undefined; 
    firstName?: string | undefined; 
    lastName?: string | undefined; 
    email?: string | undefined; 
    mobile?: string | undefined; 
    profileImage?: string | undefined; 
    coverImage?: string | undefined; 
    addressLine1?: string | undefined; 
    addressLine2?: string | undefined; 
    city?: string | undefined; 
    country?: string | undefined; 
    zipCode?: string | undefined; 
    stateId?: integer | undefined; 
    roleId?: integer | undefined; 
    schoolDistrictId?: integer | undefined; 
    manufacturerId?: integer | undefined; 

    toJSON(data?: any) : any;
}
