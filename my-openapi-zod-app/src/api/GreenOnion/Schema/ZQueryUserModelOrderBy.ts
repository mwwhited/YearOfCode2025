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

const ZQueryUserModelOrderBy = z.object({
    userId: ZOrderDirections.nullish(),
    isActive: ZOrderDirections.nullish(),
    firstName: ZOrderDirections.nullish(),
    lastName: ZOrderDirections.nullish(),
    objectId: ZOrderDirections.nullish(),
    email: ZOrderDirections.nullish(),
    mobile: ZOrderDirections.nullish(),
    profileImage: ZOrderDirections.nullish(),
    coverImage: ZOrderDirections.nullish(),
    addressLine1: ZOrderDirections.nullish(),
    addressLine2: ZOrderDirections.nullish(),
    city: ZOrderDirections.nullish(),
    country: ZOrderDirections.nullish(),
    zipCode: ZOrderDirections.nullish(),
    stateId: ZOrderDirections.nullish(),
    state: ZOrderDirections.nullish(),
    roleId: ZOrderDirections.nullish(),
    roleName: ZOrderDirections.nullish(),
    schoolDistrictId: ZOrderDirections.nullish(),
    schoolDistrictName: ZOrderDirections.nullish(),
    manufacturerId: ZOrderDirections.nullish(),
    manufacturerName: ZOrderDirections.nullish(),
    createdOn: ZOrderDirections.nullish(),
    createdById: ZOrderDirections.nullish(),
    createdBy: ZOrderDirections.nullish(),
    updatedOn: ZOrderDirections.nullish(),
    updatedById: ZOrderDirections.nullish(),
    updatedBy: ZOrderDirections.nullish(),
});

export default ZQueryUserModelOrderBy;