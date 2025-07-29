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
    schoolDistrictId: z.number().int().nullish(),
    siteCode: z.string().nullish(),
    districtName: z.string().nullish(),
    phoneNumber: z.string().nullish(),
    email: z.string().nullish(),
    country: z.string().nullish(),
    stateId: z.number().int().nullish(),
    state: z.string().nullish(),
    city: z.string().nullish(),
    districtLogo: z.string().nullish(),
    isActive: z.boolean().nullish(),
    foodServiceOptions: z.string().nullish(),
    contractCompany: z.string().nullish(),
    isSchoolCoopMember: z.boolean().nullish(),
    isSchoolCoop: z.boolean().nullish(),
    schoolCoopId: z.number().int().nullish(),
    schoolCoopName: z.string().nullish(),
    createdOn: z.string().nullish(),
    createdById: z.number().int().nullish(),
    createdBy: z.string().nullish(),
    updatedOn: z.string().nullish(),
    updatedById: z.number().int().nullish(),
    updatedBy: z.string().nullish(),
});

export default ZQuerySchoolDistrictModel;