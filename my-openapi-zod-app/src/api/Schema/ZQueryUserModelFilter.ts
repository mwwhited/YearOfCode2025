//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/26
//

import { z } from "zod";
import { ZFilterParameter } from "./ZFilterParameter";

export const ZQueryUserModelFilter = z.object({
    userId:ZFilterParameter.optional(),
    isActive:ZFilterParameter.optional(),
    firstName:ZFilterParameter.optional(),
    lastName:ZFilterParameter.optional(),
    objectId:ZFilterParameter.optional(),
    email:ZFilterParameter.optional(),
    mobile:ZFilterParameter.optional(),
    profileImage:ZFilterParameter.optional(),
    coverImage:ZFilterParameter.optional(),
    addressLine1:ZFilterParameter.optional(),
    addressLine2:ZFilterParameter.optional(),
    city:ZFilterParameter.optional(),
    country:ZFilterParameter.optional(),
    zipCode:ZFilterParameter.optional(),
    stateId:ZFilterParameter.optional(),
    state:ZFilterParameter.optional(),
    roleId:ZFilterParameter.optional(),
    roleName:ZFilterParameter.optional(),
    schoolDistrictId:ZFilterParameter.optional(),
    schoolDistrictName:ZFilterParameter.optional(),
    manufacturerId:ZFilterParameter.optional(),
    manufacturerName:ZFilterParameter.optional(),
    createdOn:ZFilterParameter.optional(),
    createdById:ZFilterParameter.optional(),
    createdBy:ZFilterParameter.optional(),
    updatedOn:ZFilterParameter.optional(),
    updatedById:ZFilterParameter.optional(),
    updatedBy:ZFilterParameter.optional(),
});
