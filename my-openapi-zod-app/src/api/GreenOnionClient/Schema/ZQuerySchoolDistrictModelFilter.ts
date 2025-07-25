//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/25
//

import { z } from "zod";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQuerySchoolDistrictModelFilter = z.object({
    schoolDistrictId:ZFilterParameter.optional(),
    siteCode:ZFilterParameter.optional(),
    districtName:ZFilterParameter.optional(),
    phoneNumber:ZFilterParameter.optional(),
    email:ZFilterParameter.optional(),
    country:ZFilterParameter.optional(),
    stateId:ZFilterParameter.optional(),
    state:ZFilterParameter.optional(),
    city:ZFilterParameter.optional(),
    districtLogo:ZFilterParameter.optional(),
    isActive:ZFilterParameter.optional(),
    foodServiceOptions:ZFilterParameter.optional(),
    contractCompany:ZFilterParameter.optional(),
    isSchoolCoopMember:ZFilterParameter.optional(),
    isSchoolCoop:ZFilterParameter.optional(),
    schoolCoopId:ZFilterParameter.optional(),
    schoolCoopName:ZFilterParameter.optional(),
    createdOn:ZFilterParameter.optional(),
    createdById:ZFilterParameter.optional(),
    createdBy:ZFilterParameter.optional(),
    updatedOn:ZFilterParameter.optional(),
    updatedById:ZFilterParameter.optional(),
    updatedBy:ZFilterParameter.optional(),
});
