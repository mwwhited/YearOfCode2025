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
import ZFilterParameter from "./ZFilterParameter";

const ZQuerySchoolDistrictModelFilter = z.object({
    schoolDistrictId: ZFilterParameter.nullish(),  
    siteCode: ZFilterParameter.nullish(),  
    districtName: ZFilterParameter.nullish(),  
    phoneNumber: ZFilterParameter.nullish(),  
    email: ZFilterParameter.nullish(),  
    country: ZFilterParameter.nullish(),  
    stateId: ZFilterParameter.nullish(),  
    state: ZFilterParameter.nullish(),  
    city: ZFilterParameter.nullish(),  
    districtLogo: ZFilterParameter.nullish(),  
    isActive: ZFilterParameter.nullish(),  
    foodServiceOptions: ZFilterParameter.nullish(),  
    contractCompany: ZFilterParameter.nullish(),  
    isSchoolCoopMember: ZFilterParameter.nullish(),  
    isSchoolCoop: ZFilterParameter.nullish(),  
    schoolCoopId: ZFilterParameter.nullish(),  
    schoolCoopName: ZFilterParameter.nullish(),  
    createdOn: ZFilterParameter.nullish(),  
    createdById: ZFilterParameter.nullish(),  
    createdBy: ZFilterParameter.nullish(),  
    updatedOn: ZFilterParameter.nullish(),  
    updatedById: ZFilterParameter.nullish(),  
    updatedBy: ZFilterParameter.nullish(),  
});

export default ZQuerySchoolDistrictModelFilter;