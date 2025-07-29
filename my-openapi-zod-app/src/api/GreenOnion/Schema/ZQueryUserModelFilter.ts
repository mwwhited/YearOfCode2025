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

const ZQueryUserModelFilter = z.object({
    userId: ZFilterParameter.nullish(),
    isActive: ZFilterParameter.nullish(),
    firstName: ZFilterParameter.nullish(),
    lastName: ZFilterParameter.nullish(),
    objectId: ZFilterParameter.nullish(),
    email: ZFilterParameter.nullish(),
    mobile: ZFilterParameter.nullish(),
    profileImage: ZFilterParameter.nullish(),
    coverImage: ZFilterParameter.nullish(),
    addressLine1: ZFilterParameter.nullish(),
    addressLine2: ZFilterParameter.nullish(),
    city: ZFilterParameter.nullish(),
    country: ZFilterParameter.nullish(),
    zipCode: ZFilterParameter.nullish(),
    stateId: ZFilterParameter.nullish(),
    state: ZFilterParameter.nullish(),
    roleId: ZFilterParameter.nullish(),
    roleName: ZFilterParameter.nullish(),
    schoolDistrictId: ZFilterParameter.nullish(),
    schoolDistrictName: ZFilterParameter.nullish(),
    manufacturerId: ZFilterParameter.nullish(),
    manufacturerName: ZFilterParameter.nullish(),
    createdOn: ZFilterParameter.nullish(),
    createdById: ZFilterParameter.nullish(),
    createdBy: ZFilterParameter.nullish(),
    updatedOn: ZFilterParameter.nullish(),
    updatedById: ZFilterParameter.nullish(),
    updatedBy: ZFilterParameter.nullish(),
});

export default ZQueryUserModelFilter;