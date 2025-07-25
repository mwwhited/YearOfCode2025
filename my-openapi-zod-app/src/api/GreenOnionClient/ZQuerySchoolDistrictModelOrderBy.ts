//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZOrderDirections } from "./ZOrderDirections";

export const ZQuerySchoolDistrictModelOrderBy = z.object({
    schoolDistrictId:ZOrderDirections.optional(),
    siteCode:ZOrderDirections.optional(),
    districtName:ZOrderDirections.optional(),
    phoneNumber:ZOrderDirections.optional(),
    email:ZOrderDirections.optional(),
    country:ZOrderDirections.optional(),
    stateId:ZOrderDirections.optional(),
    state:ZOrderDirections.optional(),
    city:ZOrderDirections.optional(),
    districtLogo:ZOrderDirections.optional(),
    isActive:ZOrderDirections.optional(),
    foodServiceOptions:ZOrderDirections.optional(),
    contractCompany:ZOrderDirections.optional(),
    isSchoolCoopMember:ZOrderDirections.optional(),
    isSchoolCoop:ZOrderDirections.optional(),
    schoolCoopId:ZOrderDirections.optional(),
    schoolCoopName:ZOrderDirections.optional(),
    createdOn:ZOrderDirections.optional(),
    createdById:ZOrderDirections.optional(),
    createdBy:ZOrderDirections.optional(),
    updatedOn:ZOrderDirections.optional(),
    updatedById:ZOrderDirections.optional(),
    updatedBy:ZOrderDirections.optional(),
});

