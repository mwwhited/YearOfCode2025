//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import type { z } from "zod";
import { ZQuerySchoolDistrictModel } from "./ZQuerySchoolDistrictModel";

type integer = number;

export interface IQuerySchoolDistrictModel {
    $schema: typeof ZQuerySchoolDistrictModel;

    schoolDistrictId?: integer | undefined; 
    siteCode?: string | undefined; 
    districtName?: string | undefined; 
    phoneNumber?: string | undefined; 
    email?: string | undefined; 
    country?: string | undefined; 
    stateId?: integer | undefined; 
    state?: string | undefined; 
    city?: string | undefined; 
    districtLogo?: string | undefined; 
    isActive?: boolean | undefined; 
    foodServiceOptions?: string | undefined; 
    contractCompany?: string | undefined; 
    isSchoolCoopMember?: boolean | undefined; 
    isSchoolCoop?: boolean | undefined; 
    schoolCoopId?: integer | undefined; 
    schoolCoopName?: string | undefined; 
    createdOn?: string | undefined; 
    createdById?: integer | undefined; 
    createdBy?: string | undefined; 
    updatedOn?: string | undefined; 
    updatedById?: integer | undefined; 
    updatedBy?: string | undefined; 

    toJSON(data?: any) : any;
}
