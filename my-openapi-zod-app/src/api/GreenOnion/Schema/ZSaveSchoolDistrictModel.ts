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
    schoolDistrictId: z.number().int().nullish(),
    siteCode: z.string().nullish(),
    districtName: z.string().nullish(),
    phoneNumber: z.string().nullish(),
    email: z.string().nullish(),
    country: z.string().nullish(),
    state: z.number().int().nullish(),
    city: z.string().nullish(),
    districtLogo: z.string().nullish(),
    isActive: z.boolean().nullish(),
    foodServiceOptions: z.string().nullish(),
    contractCompany: z.string().nullish(),
    isSchoolCoop: z.boolean().nullish(),
    schoolCoopId: z.number().int().nullish(),
});

export default ZSaveSchoolDistrictModel;