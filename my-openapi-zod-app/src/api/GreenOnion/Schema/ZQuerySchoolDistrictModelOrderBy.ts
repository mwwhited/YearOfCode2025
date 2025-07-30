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
import ZOrderDirections from "./ZOrderDirections";

const ZQuerySchoolDistrictModelOrderBy = z.object({
    schoolDistrictId: ZOrderDirections.nullish(),  
    siteCode: ZOrderDirections.nullish(),  
    districtName: ZOrderDirections.nullish(),  
    phoneNumber: ZOrderDirections.nullish(),  
    email: ZOrderDirections.nullish(),  
    country: ZOrderDirections.nullish(),  
    stateId: ZOrderDirections.nullish(),  
    state: ZOrderDirections.nullish(),  
    city: ZOrderDirections.nullish(),  
    districtLogo: ZOrderDirections.nullish(),  
    isActive: ZOrderDirections.nullish(),  
    foodServiceOptions: ZOrderDirections.nullish(),  
    contractCompany: ZOrderDirections.nullish(),  
    isSchoolCoopMember: ZOrderDirections.nullish(),  
    isSchoolCoop: ZOrderDirections.nullish(),  
    schoolCoopId: ZOrderDirections.nullish(),  
    schoolCoopName: ZOrderDirections.nullish(),  
    createdOn: ZOrderDirections.nullish(),  
    createdById: ZOrderDirections.nullish(),  
    createdBy: ZOrderDirections.nullish(),  
    updatedOn: ZOrderDirections.nullish(),  
    updatedById: ZOrderDirections.nullish(),  
    updatedBy: ZOrderDirections.nullish(),  
});

export default ZQuerySchoolDistrictModelOrderBy;