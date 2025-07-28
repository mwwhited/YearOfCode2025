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
    userId: ZOrderDirections.optional(),
    isActive: ZOrderDirections.optional(),
    firstName: ZOrderDirections.optional(),
    lastName: ZOrderDirections.optional(),
    objectId: ZOrderDirections.optional(),
    email: ZOrderDirections.optional(),
    mobile: ZOrderDirections.optional(),
    profileImage: ZOrderDirections.optional(),
    coverImage: ZOrderDirections.optional(),
    addressLine1: ZOrderDirections.optional(),
    addressLine2: ZOrderDirections.optional(),
    city: ZOrderDirections.optional(),
    country: ZOrderDirections.optional(),
    zipCode: ZOrderDirections.optional(),
    stateId: ZOrderDirections.optional(),
    state: ZOrderDirections.optional(),
    roleId: ZOrderDirections.optional(),
    roleName: ZOrderDirections.optional(),
    schoolDistrictId: ZOrderDirections.optional(),
    schoolDistrictName: ZOrderDirections.optional(),
    manufacturerId: ZOrderDirections.optional(),
    manufacturerName: ZOrderDirections.optional(),
    createdOn: ZOrderDirections.optional(),
    createdById: ZOrderDirections.optional(),
    createdBy: ZOrderDirections.optional(),
    updatedOn: ZOrderDirections.optional(),
    updatedById: ZOrderDirections.optional(),
    updatedBy: ZOrderDirections.optional(),
});

export default ZQueryUserModelOrderBy;