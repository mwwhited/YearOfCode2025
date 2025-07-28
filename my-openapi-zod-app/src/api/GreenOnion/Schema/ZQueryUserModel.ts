//
// This file is generated. Do not edit manually.
//
// @applicationName: GreenOnion.API
// @applicationDescription: GreenOnion.API - 1.0.0.0
// @applicationVersion: 1.0.0.0
// @generatedDate: 2025/07/27
//

import { z } from "zod";

const ZQueryUserModel = z.object({
    userId: z.number().int().optional(),
    isActive: z.boolean().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    objectId: z.string().optional(),
    email: z.string().optional(),
    mobile: z.string().optional(),
    profileImage: z.string().optional(),
    coverImage: z.string().optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    zipCode: z.string().optional(),
    stateId: z.number().int().optional(),
    state: z.string().optional(),
    roleId: z.number().int().optional(),
    roleName: z.string().optional(),
    schoolDistrictId: z.number().int().optional(),
    schoolDistrictName: z.string().optional(),
    manufacturerId: z.number().int().optional(),
    manufacturerName: z.string().optional(),
    createdOn: z.string().optional(),
    createdById: z.number().int().optional(),
    createdBy: z.string().optional(),
    updatedOn: z.string().optional(),
    updatedById: z.number().int().optional(),
    updatedBy: z.string().optional(),
});

export default ZQueryUserModel;