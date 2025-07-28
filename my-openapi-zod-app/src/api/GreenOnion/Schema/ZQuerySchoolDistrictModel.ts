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

const ZQuerySchoolDistrictModel = z.object({
    schoolDistrictId: z.number().int().optional(),
    siteCode: z.string().optional(),
    districtName: z.string().optional(),
    phoneNumber: z.string().optional(),
    email: z.string().optional(),
    country: z.string().optional(),
    stateId: z.number().int().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    districtLogo: z.string().optional(),
    isActive: z.boolean().optional(),
    foodServiceOptions: z.string().optional(),
    contractCompany: z.string().optional(),
    isSchoolCoopMember: z.boolean().optional(),
    isSchoolCoop: z.boolean().optional(),
    schoolCoopId: z.number().int().optional(),
    schoolCoopName: z.string().optional(),
    createdOn: z.string().optional(),
    createdById: z.number().int().optional(),
    createdBy: z.string().optional(),
    updatedOn: z.string().optional(),
    updatedById: z.number().int().optional(),
    updatedBy: z.string().optional(),
});

export default ZQuerySchoolDistrictModel;