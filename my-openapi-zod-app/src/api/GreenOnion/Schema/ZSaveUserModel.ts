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

const ZSaveUserModel = z.object({
    userId: z.number().int().optional(),
    isActive: z.boolean().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
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
    roleId: z.number().int().optional(),
    schoolDistrictId: z.number().int().optional(),
    manufacturerId: z.number().int().optional(),
});

export default ZSaveUserModel;