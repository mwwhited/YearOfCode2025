//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySchoolDistrictModelOrderBy } from "./ZQuerySchoolDistrictModelOrderBy";
import type { IOrderDirections } from "./IOrderDirections";

type integer = number;

export interface IQuerySchoolDistrictModelOrderBy {
    $schema: typeof ZQuerySchoolDistrictModelOrderBy;

    schoolDistrictId?: any | undefined; 
    siteCode?: any | undefined; 
    districtName?: any | undefined; 
    phoneNumber?: any | undefined; 
    email?: any | undefined; 
    country?: any | undefined; 
    stateId?: any | undefined; 
    state?: any | undefined; 
    city?: any | undefined; 
    districtLogo?: any | undefined; 
    isActive?: any | undefined; 
    foodServiceOptions?: any | undefined; 
    contractCompany?: any | undefined; 
    isSchoolCoopMember?: any | undefined; 
    isSchoolCoop?: any | undefined; 
    schoolCoopId?: any | undefined; 
    schoolCoopName?: any | undefined; 
    createdOn?: any | undefined; 
    createdById?: any | undefined; 
    createdBy?: any | undefined; 
    updatedOn?: any | undefined; 
    updatedById?: any | undefined; 
    updatedBy?: any | undefined; 

    toJSON(data?: any) : any;
}
