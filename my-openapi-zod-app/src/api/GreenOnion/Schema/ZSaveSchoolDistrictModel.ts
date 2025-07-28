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

const ZSaveSchoolDistrictModel = z.object({
    schoolDistrictId: z.number().int().optional(),
    siteCode: z.string().optional(),
    districtName: z.string().optional(),
    phoneNumber: z.string().optional(),
    email: z.string().optional(),
    country: z.string().optional(),
    state: z.number().int().optional(),
    city: z.string().optional(),
    districtLogo: z.string().optional(),
    isActive: z.boolean().optional(),
    foodServiceOptions: z.string().optional(),
    contractCompany: z.string().optional(),
    isSchoolCoop: z.boolean().optional(),
    schoolCoopId: z.number().int().optional(),
});

export default ZSaveSchoolDistrictModel;