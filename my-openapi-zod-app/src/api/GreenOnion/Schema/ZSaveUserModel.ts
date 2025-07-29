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
    userId: z.number().int().nullish(),
    isActive: z.boolean().nullish(),
    firstName: z.string().nullish(),
    lastName: z.string().nullish(),
    email: z.string().nullish(),
    mobile: z.string().nullish(),
    profileImage: z.string().nullish(),
    coverImage: z.string().nullish(),
    addressLine1: z.string().nullish(),
    addressLine2: z.string().nullish(),
    city: z.string().nullish(),
    country: z.string().nullish(),
    zipCode: z.string().nullish(),
    stateId: z.number().int().nullish(),
    roleId: z.number().int().nullish(),
    schoolDistrictId: z.number().int().nullish(),
    manufacturerId: z.number().int().nullish(),
});

export default ZSaveUserModel;